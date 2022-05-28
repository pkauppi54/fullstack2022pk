import { useState } from 'react'

const Button = ({ handleClick , name }) => ( 
  <button onClick={handleClick}>{name}</button> 
)

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}



const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>No stats available yet, press a button</p>
      </div>
    )
  }
  
  return (  
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={props.all}/>
          <StatisticLine text="average" value={props.average}/>
          <StatisticLine text="positive" value={props.positive}/>
        </tbody>
      </table>
    </div>

  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good * 1 + bad * -1) / all
  const positive = good/all*100


  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={() => setGood(good + 1)} />
      <Button name="neutral" handleClick={ () => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={ () => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
    
    
  )
}

export default App