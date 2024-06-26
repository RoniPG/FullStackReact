import { useEffect, useState } from "react"
import axios from "axios"

const Countries = ({filteredCountries, handleClick}) => {
  const languages = filteredCountries.map((country)=> country.languages) 
  if (filteredCountries.length ===0 || filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      filteredCountries.map((country, index) => {
        return (
          <div key={index}>
        <p>{country.name.common}
        <button id={country.name.common} onClick={handleClick}>show</button>
        </p>
        </div>
        )
      })
    )
  }else if (filteredCountries.length === 1) {
    return (
      <div>
      <h1>{filteredCountries[0].name.common}</h1>
      <p>capital {filteredCountries[0].capital}</p>
      <p>area {filteredCountries[0].area}</p>
      <p><strong>languages:</strong></p>
      <ul>
        {/* Con componente...
         <Languages languages={languages}/> */}
        { // Sin componente
        Object.values(languages[0])
        .map(language => <li key={language}>{language}</li>)
        }
      </ul>
      <img alt={filteredCountries[0].flags.alt} src={filteredCountries[0].flags.png}/>
      </div>
    )
  }
}
// Versión con un nuevo componente
// const Languages = ({languages}) => {
//    const languagesResult = Object.values(languages[0])
//    console.log("languagesResult: ", languagesResult);
//   return (
//     <div>
//       { 
//       languagesResult.map(language => <li>{language}</li>)
//       }
//     </div>
//   )
// }
const App = () => {
  // console.log("render APP");

  const[countries, setCountries]= useState([])
  const[filter, setFilter]= useState("")
  const[filteredCountries, setfilteredCountries]= useState([...countries])

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => {
      // console.log("response.data: ", response.data);
      setCountries(response.data)
    })
  }, []) 
  const handleChange = (event) =>{
    setFilter(event.target.value)
    const findCountries = countries.filter((country) => 
      country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    // console.log(findCountries);
    setfilteredCountries(findCountries)
  }
  const handleClick = (event) => {
      const id =event.target.id
      setfilteredCountries(filteredCountries.filter((country)=> country.name.common.toLowerCase()===id.toLowerCase()))
      setFilter("")
  }

  return (
    <div>
      <p>find countries
        <input value={filter} onChange={handleChange}></input>
      </p>
      {/* {console.log("filteredCountries: ", filteredCountries)} */}
      <Countries handleClick={handleClick} filteredCountries={filteredCountries}/>
    </div>
  )
}

export default App