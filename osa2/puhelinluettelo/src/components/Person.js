import numberService from "../services/numberService"
import {persons, setPersons} from "../App"

const Person = ({ person }) => {
  
  return (
    <li>{person.name} {person.phone} <button onClick={() => {
      numberService
        .remove(person.id)
        .then(setPersons(persons.filter(person => person.id !== id)))
    }}>remove</button></li>
  )
}

export default Person