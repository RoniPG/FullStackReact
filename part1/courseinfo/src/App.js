import { useState } from 'react'
const StatisticsLine = (props) => {
  return (
    <tbody>
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
    </tbody>
  )
}
const Statistics = (props) => {
  if ((props.good+props.neutral+props.bad) === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <table>
          <StatisticsLine text = {"good"} value = {props.good} />
          <StatisticsLine text = {"neutral"} value = {props.neutral} />
          <StatisticsLine text = {"bad"} value = {props.bad} />
          <StatisticsLine text = {"all"} value = {props.good + props.neutral + props.bad} />
          <StatisticsLine text = {"average"} value = {((props.good *1) + (props.neutral * 0) + (props.bad * (-1))) / (props.good + props.neutral + props.bad)+" %"}/>
          <StatisticsLine text = {"positive"} value = {props.good * 100 / (props.good + props.neutral + props.bad)} />
        </table>
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
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
      <Button handleClick = {handleClickGood} text = {"good"}/>
      <Button handleClick = {handleClickNeutral} text = {"neutral"}/>
      <Button handleClick = {handleClickBad} text = {"bad"}/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      </div>
  )
}
export default App