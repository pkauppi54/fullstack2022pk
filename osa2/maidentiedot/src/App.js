import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import axios from "axios"
import Countries from "./components/Countries"


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

  // useEffect(() => {
  //   const api = process.env.REACT_APP_API_KEY
  //   axios
  //     .get("")
  //     .then(response => {

  //     })
  // })
 

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(newFilt.toLowerCase()))
  

  
  const handleFiltChange = (event) => {
    setNewFilt(event.target.value)
  }


  return (
    <div>
      <Filter newFilt={newFilt} handleFiltChange={handleFiltChange}/>
      
      <Countries setNewFilt={setNewFilt} countriesToShow={countriesToShow} />
    </div> 
  )
}


export default App;
