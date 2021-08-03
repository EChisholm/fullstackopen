import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ nameFilter, setNameFilter] = useState('')
  
  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const peopleToShow = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {name: newName, number: newNumber}
    persons.some((person) => (person.name) === newName || (person.number) === newNumber) 
      ? window.alert(`${newName} is already in the address book. Please enter a different name`)
      : setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    
  }


  return (
    <div>
      <h2>Phonebook</h2>
        <Filter nameFilter={nameFilter} filterHandler={handleFilterChange}/>
      <h3>Add a new person</h3>
        <PersonForm 
          submitHandler={addPerson}
          name={newName}
          nameHandler={handleNameChange}
          number={newNumber}
          numberHandler={handleNumberChange}
        />
      <h2>Numbers</h2>
        <Persons peopleToShow={peopleToShow} />
    </div>
  )
}

export default App