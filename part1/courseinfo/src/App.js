
const Course = (props) =>{
  //console.log("Course",props.courses);
  return (
    <div>
      {props.courses.map((course) => {
        return (
          <div key = {course.id}>
             {/**console.log(course.name)*/}
            <Header name = {course.name}/>
            {/**console.log("Course",course.parts)*/}
            <Content parts = {course.parts}/>
            <p><strong>total of {
            course.parts.reduce((s, p) => s + p.exercises,0)
            } exercises</strong></p>
          </div>
        )
      })}
      {/**<Header courses={props.courses}/>
      <Content courses={props.courses} />*/}
    </div>
  )
}

//const Header = ({course}) => <h1>{course}</h1>
const Header = (props) => {
  //console.log("Header",props)
  return (
    <div >
      <h1>
        {/**console.log(props.name)*/}
        {props.name}
      </h1>
    </div>
  )
    
}

//const Content = ({part},{exercises}) => <p>{part},{exercises}</p>
const Content = (props) => {
//console.log(props)
  return (
    <div>
      {props.parts.map ((part,index) => {
        return (
          <div key = {index + "." +part.id}> 
            {/**console.log(part)*/}
            <Part part = {part}/>
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
  //console.log(props);
  return (
    <div>
      {props.part.name} {props.part.exercises}
    </div>
  )
}
const App = () => {
  const courses = [
    {
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
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
    /**const total = courses.parts.reduce(function(sum, part){
    console.log("What is happening", sum, part.exercises);
    return sum + part.exercises
  },0)*/
  //Versión con reduce aún mas corto....
  //const total = course.parts.reduce((s, p) => s + p.exercises)
  

  return (
    <div>
      <Course courses = {courses}/>
    </div>
  )
}

export default App
  