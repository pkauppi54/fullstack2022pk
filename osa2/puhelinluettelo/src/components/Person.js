import numberService from "../services/numberService"


const Person = ({ person }) => {
  
  return (
    <li>{person.name} {person.phone} 
    
    </li>
  )
}

export default Person