import { useState } from 'react'

const Header = ({text})=> {
  return(
    <div>
      <h1> {text} </h1>
    </div>
  ) 
}

const Button = (props) => {
  return(
    <div>
      <button onClick={props.onClick}> {props.text} </button>
    </div>
  )
}

const StadisticLine = (props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Stadistics = (props) =>{
  const all = props.good + props.neutral + props.bad
  const average = all > 0 ? (props.good - props.bad) / all : 0
  const positive = all > 0 ? (props.good * 100) / all : 0

  if (all === 0) {
    return (
      <div>
        <Header text={props.headers.h2} />
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <Header text={props.headers.h2}/>
      <table>
        <tbody>
          <StadisticLine text="good" value={props.good}/>
          <StadisticLine text="neutral" value={props.neutral}/>
          <StadisticLine text="bad" value={props.bad}/>
          <StadisticLine text="all" value={all}/>
          <StadisticLine text="average" value={average}/>
          <StadisticLine text="positive" value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const headers = {
    h1: "give feedback",
    h2: "stadistics",
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReview = () => setGood(good + 1)

  const neutralReview = () => setNeutral(neutral + 1)

  const badReview = () => setBad(bad + 1)

  return (
    <div>
      <Header text={headers.h1}/>
      <Button onClick= {goodReview} text= "good"/>
      <Button onClick= {neutralReview} text= "neutral"/>
      <Button onClick= {badReview} text= "bad"/>
      <Stadistics headers={headers} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
