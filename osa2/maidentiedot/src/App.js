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
        setCountries(response.data.name)
      })
  }, [] )
<<<<<<< HEAD
  
=======

  // useEffect(() => {
  //   const api = process.env.REACT_APP_API_KEY
  //   axios
  //     .get("")
  //     .then(response => {

  //     })
  // })
 

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(newFilt.toLowerCase()))
>>>>>>> 217234f8e925df074d1b93a434cb05cb0bc51cc3
  

  
<<<<<<< HEAD
    
  // Search countries from the API with the newFilt then display the needed aspects with an if statement (>10 countries)
  //const countriesToShow = countries.filter(country => country.name.common.includes(newFilt))
// this above is a direction from puhelinluettelo



=======
>>>>>>> 217234f8e925df074d1b93a434cb05cb0bc51cc3
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
