import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ nameFilter, setNameFilter] = useState('')

  useEffect( () => {
    console.log('effect')
    personService
    .getAll()
    .then(initialData => {
      setPersons(initialData)
      })
    }, [])
  console.log('render', persons.length, 'persons')
  
  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
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
      : personService
        .create(nameObject)
        .then( (newPerson) => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
      
      
    
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