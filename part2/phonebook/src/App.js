import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'


const App = () => {
  
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ nameFilter, setNameFilter] = useState('')
  const [ message,  setMessage] = useState(null)
  const [ httpSuccess, setHttpSuccess] = useState(false)


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
    if (persons.some((person) => (person.name) === newName)) {
      const personToEdit = persons.find((person) => (person.name) === newName)
      console.log(personToEdit)
      if (window.confirm(`${newName} is already in the address book. Replace the old number with a new one?`)){
        personService
        .put(personToEdit.id,nameObject)
        .then( (editedPerson) => {
          setPersons(persons.map((p) => (p.id === editedPerson.id ? editedPerson : p)))
          setNewName('')
          setNewNumber('')
          setHttpSuccess(true)
          setMessage(`${editedPerson.name}'s information has been updated!`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setHttpSuccess(false)
          setMessage(`Information of ${newName} has already been removed from the server.`)
          setTimeout(() => {
            setMessage(null)
          }, 10000)
          setPersons(persons.filter(person => person.id !== personToEdit.id))
          setNewName('')
          setNewNumber('')
        })
      }
    }
    else { personService
        .create(nameObject)
        .then( (newPerson) => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
          setHttpSuccess(true)
          setMessage(`${newPerson.name} has been added!`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }
  }

  const removePerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personToDelete = persons.find( p => p.id === parseInt(event.target.value))
    if (window.confirm(`Do you really want to delete ${personToDelete.name}?`)) {
      personService
        .remove(personToDelete.id)
        .then( (deletedPerson) => {
                setPersons(persons.filter(person => person.id !== personToDelete.id))
        })}

    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={httpSuccess} />
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
        <Persons peopleToShow={peopleToShow} deleteHandler={removePerson} />
    </div>
  )
}

export default App