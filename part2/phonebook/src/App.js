import React, { useState } from 'react'

const Person = ({person}) => {
  return(
    <p>{person.name} </p>
  )
}



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {name: newName}
    persons.some((person) => (person.name) === newName) 
      ? window.alert(`${newName} is already in the address book. Please enter a different name`)
      : setPersons(persons.concat(nameObject))
    setNewName('')
    
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) =>
            <Person key={person.name} person={person} />
        )}
      </div>
    </div>
  )
}

export default App