import { useState } from 'react'


const Button = (props) => (
  
    <button onClick={props.handleClick}>{props.text}</button>
  )



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  

  
  const [selected, setSelected] = useState(0)
<<<<<<< HEAD
  const [votes, setVote] = useState(new Uint8Array(7))

  console.log(votes)

  const f = [...votes]
  f[3] += 100
  
  console.log(f)
=======
  let [copy, setCopy] = useState(new Uint8Array(anecdotes.length))
  let [high, setHigh] = useState(0)
>>>>>>> a5bdfdcee2dbaa35a11b5b47c58b2757792d5674

  const randomSelect = () => {
    var randomNumber = Math.floor(Math.random() * 7)
    console.log(randomNumber)
    setSelected(randomNumber)
  }
  
  
  // const votes = new Uint8Array(7)
  

<<<<<<< HEAD
  // const f = [...votes]
  // // f[selected] += 10
  // console.log(f)
      
  return (
    <div>
      
      <p>{anecdotes[selected]} <br/>
       </p>
      
      {/* <Button handleClick={() => f[selected] += 10} text="vote"/> */}
      <Button handleClick={randomSelect} text="More wisdom" />
      
      
=======
  const handleVote = () => {
    copy = [...copy]
    copy[selected] += 1
    setCopy(copy)
  }

  console.log(copy)

  const highestNum = () => {
        const highest = Math.max(...copy)
        const highIndex = copy.indexOf(highest)
        const highestAnectode = anecdotes[highIndex]
        setHigh(highestAnectode)
  }

  console.log(high)

  return ( 
    <div>
      {anecdotes[selected]} <br/>
      <Button handleClick={randomSelect} text="More wisdom" />
      <Button handleClick={handleVote} text="vote" /> <br/>
      <p>Votes: {copy[selected]}</p>
      <Button handleClick={highestNum} text="highest voted" />
      <p>{high}</p>
>>>>>>> a5bdfdcee2dbaa35a11b5b47c58b2757792d5674
    </div>
  )
}

export default App