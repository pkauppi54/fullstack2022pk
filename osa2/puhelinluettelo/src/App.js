import { useState } from "react"
import Person from "./components/Person"


const App = () => {
  
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" }
  ])
  const [newName, setNewName] = useState("")
  const [names, setNames] = useState([])

  const addName = (event) => {
    setNames(names.concat(newName))
    event.preventDefault()

    if (names.includes(newName)) {
      alert("Person already on the list!")
      setNewName("")
    } else {
      const personObject = {
        name: newName,
        id: newName
      }
      
      setPersons(persons.concat(personObject)) 
      setNewName("")
    }
    
  }
  


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
            <button 
              type="submit"
              >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map(person =>
            <Person person={person} key={person.name} />)}
        </ul>
    </div>
  )


}


export default App



