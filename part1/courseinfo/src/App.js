//const Header = ({course}) => <h1>{course}</h1>
const Header = (props) => {
  //console.log(props)
  return<h1>{props.course.name}</h1>
}

//const Content = ({part},{exercises}) => <p>{part},{exercises}</p>
const Content = (props) => {
 //console.log(props)
  return (
    <div>
      {props.course.parts[0].name}{props.course.parts[0].exercises}<br/>
      {props.course.parts[1].name}{props.course.parts[1].exercises}<br/>
      {props.course.parts[2].name}{props.course.parts[2].exercises}<br/> {/** //-->Este <br/> puede que no haga falta*/}
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
  return <p>Number of exercises {props.course.parts[0].exercises}+{props.course.parts[1].exercises}+{props.course.parts[2].exercises}</p>
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
