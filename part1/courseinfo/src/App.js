//const Header = ({course}) => <h1>{course}</h1>
const Header = (props) => {
  //console.log(props)
  return<h1>{props.course}</h1>
}

//const Content = ({part},{exercises}) => <p>{part},{exercises}</p>
const Content = (props) => {
 //console.log(props)
  return (
    <div>
      {props.parts[0].name}{props.parts[0].exercises}<br/>
      {props.parts[1].name}{props.parts[1].exercises}<br/>
      {props.parts[2].name}{props.parts[2].exercises}<br/> {/** //-->Este <br/> puede que no haga falta*/}
    </div>
  )
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
  return <p>Number of exercises {props.parts[0].exercises}+{props.parts[1].exercises}+{props.parts[2].exercises}</p>
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
