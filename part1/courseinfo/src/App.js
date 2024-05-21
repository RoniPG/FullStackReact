import { useEffect, useState } from "react"
import axios from "axios"

const Countries = ({countries, filteredCountries}) => {
  if (filteredCountries.length ===0 || filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      filteredCountries.map((country) => {
        return (
        <p>{country.name.common}</p>
        )
      })
    )
  }
}
const App = () => {
  console.log("render APP");

  const[countries, setCountries]= useState([])
  const[filter, setFiter]= useState("")
  const[filteredCountries, setfilteredCountries]= useState([...countries])

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => {
      console.log("response.data: ", response.data);
      setCountries(response.data)
    })
  }, []) 
  const handleChange = (event) =>{
    setFiter(event.target.value)
    const findCountries = countries.map((country) => {
      return country.name.common.contains(event.target.value)}
    )
    console.log(findCountries);
    //setfilteredCountries(countries.find((country) => country.name.common.some(event.target.value)))
  }

  return (
    <div>
      <p>find countries
        <input value={filter} onChange={handleChange}></input>
      </p>
      {console.log("filteredCountries: ", filteredCountries)}
      <Countries countries={countries} filteredCountries={filteredCountries}/>
    </div>
  )
}

export default App