
const Course = (props) =>{
  return (
    <div>
      <Header name={props.course.name}/>
      <Content parts={props.course.parts} />
    </div>
  )
}

//const Header = ({course}) => <h1>{course}</h1>
const Header = (props) => {
  //console.log(props)
  return<h1>{props.name}</h1>
}

//const Content = ({part},{exercises}) => <p>{part},{exercises}</p>
const Content = (props) => {
//console.log(props.parts)
  return (
    <div>
      {props.parts.map((part) => {
        return (
          <div key = {part.id}> 
            <Part name = {part.name} exercises= {part.exercises} />
          </div>
        )
      })}
      {/**<Part name = {props.parts[0].name} exercises ={props.parts[0].exercises}/>
      <Part name = {props.parts[1].name} exercises ={props.parts[1].exercises}/>
      <Part name = {props.parts[2].name} exercises ={props.parts[2].exercises}/>*/}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
      
    ]
  }
  /** Version con for...
  // Creamos una función que sume los ejericicios
  const sumTotal = () => {
    let total = 0
    for (let i = 0; i < course.parts.length; i++) {
      total = total + course.parts[i].exercises
      console.log("total = ", total);
    }
    return total
  }
  // Asignamos la función a una variable para luego llamarla desde el return
  const total = sumTotal()
 */
  
  //Versión con reduce...
  const total = course.parts.reduce(function(sum, part){
    console.log("What is happening", sum, part.exercises);
    return sum + part.exercises
  },0)
  //Versión con reduce aún mas corto....
  //const total = course.parts.reduce((s, p) => s + p.exercises)
  

  return (
    <div>
      <Course course = {course}/>
      <p><strong>total of {total} exercises</strong></p>
    </div>
  )
}

export default App
  