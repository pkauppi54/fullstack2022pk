import Content from "./Content"


const Part = ({part}) => {
    return (
      <p>{part.name}: {part.exercises}</p>
    )
}

export default Part