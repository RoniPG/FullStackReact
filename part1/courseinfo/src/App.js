import { useState } from 'react'
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  
  ]
  const [selected, setSelected] = useState(0)
  // Creamos un State que almacena un array donde almacenaremos los puntos, de cada anecdota
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const randomAnecdotes = () => {
    return Math.floor(Math.random()*anecdotes.length)
  }
  const nextAnecdote = () => {
    return (
      setSelected(randomAnecdotes())
    )
  }
  const vote = () => {
    // Creamos una copia del array del state para modificarlo 
    const pointsCopy = [...points]
    //Modificamos la copia en la posicion de la anecdota
    pointsCopy[selected] +=1
    //Le pasamos la copia modificada al array original con la función setPoints()
    setPoints(pointsCopy)
  }
  const mostVotes = () => {
    let maxVotes = 0
    let posArray = 0
    for (let i = 0; i < points.length; i++) {
      if (points[i]>maxVotes) {
        maxVotes = points[i]
        posArray = i
      } 
    }
    return anecdotes[posArray]
    /**Version simplificada
    let maxVotes = Math.max(...points)
    let posArray = points.indexOf(maxVotes)
    return anecdotes[posArray]
    */
  }

   return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClick = {nextAnecdote} text = {"next anecdote"}/>
      <Button handleClick = {vote} text = {"vote"}/>
      <h1>Anecdote whith most votes</h1>
      <p>{mostVotes()}</p>
    </div>
  )
}

export default App