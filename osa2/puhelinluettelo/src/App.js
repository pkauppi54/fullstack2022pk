import { useState } from "react"
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "+358-40982781" },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState("")
  const [names, setNames] = useState([])
  const [newPhone, setNewPhone] = useState("")
  const [phones, setPhones] = useState([])
  const [newFilt, setNewFilt] = useState("")


  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilt))

  const addPerson = (event) => {
    addName(event)
    addPhone(event)

    if (names.includes(newName) | phones.includes(newPhone)) {
      alert("Person or number already on the list!")
      setNewName("")
      setNewPhone("")
    } else {
      const personObject = {
        name: newName,
        phone: newPhone,
        id: newName
      }
      setPersons(persons.concat(personObject)) 
      setNewName("")
      setNewPhone("")
    }
  }

  const addName = (event) => {
    setNames(names.concat(newName))
    event.preventDefault()
  }
  const addPhone = (event) => {
    setPhones(phones.concat(newPhone))
    event.preventDefault()
  }
  

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  const handleFiltChange = (event) => {
    setNewFilt(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilt={newFilt} handleFiltChange={handleFiltChange}/>

      <PersonForm 
        addPerson={addPerson} 
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange} 
        handlePhoneChange={handlePhoneChange} />

      <h2>Numbers</h2>
        <Persons personsToShow={personsToShow} />
    </div>
  )


}


export default App



