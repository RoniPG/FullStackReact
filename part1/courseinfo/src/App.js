import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [value, setValue] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => {
    console.log(response.data);
    setCountries((prevCountries) => prevCountries.concat(response.data))
    })
  },[])
  const handleChange = (event) =>{
    setValue(event.target.value)
  }
  return (
    <div>
    <p>find countries <input value={value} onChange={handleChange}></input></p>
    {}
    </div>
  )
}

export default App