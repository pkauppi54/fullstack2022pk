import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import axios from "axios"

const App = () => {

  const [newFilt, setNewFilt] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [] )
  console.log(countries[0])
  
  
    
  // Search countries from the API with the newFilt then display the needed aspects with an if statement (>10 countries)
  const countriesToShow = countries.filter(country => country.name.common.includes(newFilt))
// this above is a direction from puhelinluettelo



  const handleFiltChange = (event) => {
    setNewFilt(event.target.value)
  }






  return (
    <div>
      <Filter newFilt={newFilt} handleFiltChange={handleFiltChange}/>
      {countriesToShow}
      {/* <h1>{country.name}</h1>
      <p>capital {country.capital} <br/>
      area {country.area} </p>

      <h3>languages</h3>
      {/* <ul>
        country.languages.map(language => {
          <li>{language}</li>
        })
      </ul> */}
    </div> 


  )
}


export default App;
