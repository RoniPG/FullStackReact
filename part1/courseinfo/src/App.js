//const Header = ({course}) => <h1>{course}</h1>
const Header = (props) => {
  console.log(props)
  return<h1>{props.course}</h1>
}

//const Content = ({part},{exercises}) => <p>{part},{exercises}</p>
const Content = (props) => {
 return <div>{props.part}{props.exercises}</div>
}

//To implement

/**const Content = (props) => {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}*/

//To implement: shortest version

const Total = (props) => {
  return <p>Number of exercises {props.exercises1}+{props.exercises2}+{props.exercises3}</p>
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part={part1.name} exercises= {part1.exercises} />
      <Content part={part2.name} exercises= {part2.exercises} />
      <Content part={part3.name} exercises= {part3.exercises} />
      <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}/>
    </div>
  )
}

export default App
