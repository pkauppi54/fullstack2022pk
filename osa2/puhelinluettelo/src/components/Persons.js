import Person from "./Person"
import numberService from "../services/numberService"
import { useEffect, useState } from "react"

const Persons = ({personsToShow, deletePerson}) => {
    
    return (
    <ul>
        {personsToShow.map(person =>
            <div key={person.name}>
            <Person person={person}/> <button onClick={() => {
                window.confirm(`Are you sure you want to delete ${person.name}`)
                const data = numberService
                    .remove(person.id)
                deletePerson(person.id)
                }}>remove</button>
            </div>)}
    </ul>
)}

export default Persons