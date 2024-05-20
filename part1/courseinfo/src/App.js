
import { useEffect, useState } from 'react'
import { addPerson, getAll, deletePerson } from './services/serverController'

const Filter = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          filter shown with<input onChange={props.handleFilterChange} value={props.filter}/>
      </div>
    </form>
  )
}
const PersonForm = (props) => {
  return (
   <form onSubmit={props.handleSubmit}>
      <div>
        name: <input type='text' onChange={props.handleNameChange} value={props.newName}/>
      </div>
      <div>
        number: <input type='tel' onChange={props.handleNumberChange} value={props.newNumber}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
const Persons = (props) => {
  // console.log("Componente Persons con props.persons: ", props.persons);
  // console.log("Componente Persons con props.filterdPERSONS: ", props.filteredPersons);
  if (props.contenido === 0 && props.filter ===""){
    return (
      <div>
        { 
          props.persons.map((person) => 
          <div key={person.id}> {person.name} {person.number} 
          <button id ={person.id} onClick={props.handleButton}> delete </button>
          </div>)
        }        
     </div>
    )
  }
  return (
    <div>
      { 
        props.filteredPersons.map((person) => 
        <div key={person.id}> {person.name} {person.number}
        <button id ={person.id} onClick={props.handleButton}> delete </button>
        </div>)
      }        
   </div>
  )
}


const App = () => {
  //console.log("Al principio de la APP");
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const[filteredPersons, setFilteredPersons] = useState([...persons]) // ---> No me queda claro que sea correcto esta línea
  //console.log("Valor de persons" , persons);
  //console.log("Valor de filteredPersons" , filteredPersons);
 
  //Con axios...
  useEffect (() => {
    // console.log("Me ejecuto");
    getAll()
    .then(initialPersons => {
      // console.log(initialPersons);
      setPersons(persons => persons.concat(initialPersons))
    })
      // console.log("seteando las personas");
  }, [])

  /**
  // Con fetch...
  useEffect (() => {
    fetch("http://localhost:3001/persons")
    .then((response => response.json()))
    .then(json => {
      setPersons((prevpersons) => prevpersons.concat(json))
    })
  }, [])
  */

  //TODO: Aplicar una lógica de filtros en donde se tenga en cuenta que los caracteres introducidos puedan estar
  //      en cualquier posición dentro del array.name. Ya que en esta solución tiene encuenta el que el string
  //      coincida exactamente con una parte del array.name. Ej : pera --> er, per, pe, era, ra, etc..

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    //console.log(event.target.value);
    const PersonFiltered = persons.filter((person) => 
      person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredPersons(PersonFiltered) // ---> No me queda claro que sea correcto esta línea
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personToAdd= {
      name: newName,
      number: newNumber
    }
    //Version corta...
    const yes = persons.some((person) => {
      return person.name === newName
    })
    //console.log(yes);
    if (yes) {
      alert(`${personToAdd.name} is already added to phonebook`)
    } else if (newName === "" || newNumber ==="") {
      if (newName ==="") {
        alert("The name can't be empty")
      } else {
        alert("The number can't be empty")
      }

    } else {
      addPerson(personToAdd)
        .then(returnedPerson => {
         //console.log("returnedPerson: ",returnedPerson);
         setPersons(persons.concat(returnedPerson))
         setFilteredPersons(persons.concat(returnedPerson))
        })      
    }
    //console.log("person despues del add: ",persons);
    setNewName("")
    setNewNumber("")
    
    //console.log("Añadiremos a:" ,personToAddToState.names
    
    //Version larga...
    /**let flag = false
    for (let i = 0; i < persons.length; i++) {
      if(persons[i].name === personToAddToState.name) flag=true    
    } 
    if (flag) {
      alert(`${personToAddToState.name} is already added to phonebook`)
      setNewName("")
      flag=false
    } else {
      setPersons(persons.concat(personToAddToState))
      setNewName("")
    }
    */   
  }
  const handleButton = (event) => {
    // console.log(event.target.id);
    const personName = persons.find(person => person.id === event.target.id)
    const confirm = window.confirm(`Delete ${personName.name}`)
    if (confirm) {
      deletePerson(`/${event.target.id}`)
      getAll()
      .then(initialPersons => {
      //console.log("initialPersons", initialPersons);
      setFilteredPersons(initialPersons.map(person => person.id !== event.target.id ? person : "").filter(person => person !== ""))
      setPersons(initialPersons.map(person => person.id !== event.target.id ? person : "").filter(person => person !== ""))
    })
    }
    // getAll()
    // .then(returned =>  {
    //   console.log(returned);
    //   setFilteredPersons(returned)
    //   setPersons(returned)
    // })
  }

  return (
    <div>
      <h2>Phonebook</h2>

        <Filter handleSubmit={handleSubmit} handleFilterChange={handleFilterChange} filter={filter}/>
      <h2>add a new</h2>
        <PersonForm handleSubmit={handleSubmit} handleNameChange={handleNameChange} newName={newName}
                    handleNumberChange={handleNumberChange} newNumber={newNumber}/>
      <h2>Numbers</h2>
        <Persons filteredPersons={filteredPersons} persons={persons} contenido={filteredPersons.length} 
        filter={filter} handleButton={handleButton}/>
    </div>
  )

}

export default App