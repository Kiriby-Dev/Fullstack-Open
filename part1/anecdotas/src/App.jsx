import { useState } from 'react'

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const Display = ({text}) => {
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [mostPoints, setMax] = useState(0)

  const nextAnecdote = () => {
    setSelected(random(0, anecdotes.length))
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    if (copy[selected] > copy[mostPoints])
      setMax(selected)
  }

  return (
    <div>
      <Display text="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={nextAnecdote} text="next anecdote" />
      <Button onClick={vote} text="vote" />
      <Display text="Anecdote with most votes"/>
      <p>{anecdotes[mostPoints]}</p>
    </div>
  )
}

export default App
