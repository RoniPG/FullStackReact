import {Course} from "./Course"

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
  