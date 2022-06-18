import Part from "./Part"

const Content = ({ course }) => {
    const sizes = course.parts.map(part => 
      part.exercises)
    const total = sizes.reduce((previousValue, currentValue) => previousValue + currentValue)

    return (
      <div>
        {course.parts.map(part =>
          <Part key={part.id} part={part} />
        )}
        <br/>
        <b>Total number of exercises: {total}</b>
        
        
      
      </div>
    )
  }

export default Content

