import { useEffect, useState } from "react"
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import numberService from "./services/numberService"
import SuccessNotification from "./components/SuccessNotification"
import ErrorNotification from "./components/ErrorNotification"


const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [names, setNames] = useState([])
  const [newPhone, setNewPhone] = useState("")
  const [phones, setPhones] = useState([])
  const [newFilt, setNewFilt] = useState("")
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    numberService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [] )

  const deletePerson = (id) => {
    try {
      setPersons(persons.filter(person => person.id !== id))
    }
    catch (error ) {
      setErrorMessage(
        `Information of has already been removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
    setSuccessMessage(
      `Deleted`
    )
    setTimeout(() => {
      setSuccessMessage(null)
    }, 3000)
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilt))

  const addPerson = (event) => {
    addName(event)
    addPhone(event)

    if (names.includes(newName)) {
      window.confirm(`Would you like to replace ${newName} old number with the new one?`)
      const oldPerson = persons.find(person => person.name === newName)
      const iidee = oldPerson.id
      const changedPerson = {...oldPerson, phone: newPhone}
      
      numberService
        .update(iidee, changedPerson)
        .then(newPerson => {
          setPersons(persons.map(per => per.id !== iidee ? per : newPerson))
        })
        .catch(error => {
          setErrorMessage(
            `Information of ${changedPerson.name} has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
        setSuccessMessage(
          `Number replaced to: '${newPhone}'`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
        setNewName("")
        setNewPhone("")
    } 
    else {
      const personObject = {
        name: newName,
        phone: newPhone,
      }
      numberService
        .create(personObject)
        .catch(error => {
          setErrorMessage(
            `Information of xxx has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setSuccessMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 3000)
          setNewName("")
          setNewPhone("")
        })
      
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
      <SuccessNotification message={successMessage} />
      <ErrorNotification message={errorMessage} />
      <Filter newFilt={newFilt} handleFiltChange={handleFiltChange}/>

      <PersonForm 
        addPerson={addPerson} 
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange} 
        handlePhoneChange={handlePhoneChange}
         />

      <h2>Numbers</h2>
        <Persons personsToShow={personsToShow} deletePerson={deletePerson} setErrorMessage={setErrorMessage}/>
    </div>
  )


}


export default App


