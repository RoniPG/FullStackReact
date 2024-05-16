import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:"040-1231244"}
  ]) 
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const personToAddToState = {
      name: newName,
      number: newNumber
    }
    //Version corta...
    const is = persons.some((person) => {
      return person.name === newName
    })
    //console.log(is);
    if (is) {
      alert(`${personToAddToState.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personToAddToState))
    }
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
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          number: <input type='tel' onChange={handleNumberChange} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )

}

export default App