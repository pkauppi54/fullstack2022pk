import Person from "./Person"

const Persons = ({personsToShow}) => (
    <ul>
        {personsToShow.map(person =>
            <Person person={person} key={person.name} />)}
    </ul>
)

export default Persons