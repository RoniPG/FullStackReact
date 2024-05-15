import { useState } from 'react'

const Statistics = (props) => {
  if ((props.good+props.neutral+props.bad) === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.good + props.neutral + props.bad}</p>
        <p>average {((props.good *1) + (props.neutral * 0) + (props.bad * (-1))) / (props.good + props.neutral + props.bad)}</p>
        <p>positve {props.good * 100 / (props.good + props.neutral + props.bad)} %</p>
      </div>
    )
  }
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good +1)
  }
  
  const handleClickNeutral = () => {
    setNeutral(neutral +1)
  }
  
  const handleClickBad = () => {
    setBad(bad +1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      </div>
  )
}
export default App