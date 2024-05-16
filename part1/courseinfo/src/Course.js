export const Course = (props) =>{
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
export const Header = (props) => {
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
  
export const Part = (props) => {
    //console.log(props);
    return (
      <div>
        {props.part.name} {props.part.exercises}
      </div>
    )
  }
// export default Course -->Manera general de exportar