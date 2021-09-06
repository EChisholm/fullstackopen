import React from 'react'

const Person = ({person,deleteHandler}) => {
    return(
      <div>
      <li key={person.id}>{person.name} {person.number} 
        <button value={person.id} type="button" onClick={deleteHandler}> delete </button>
      </li>
      
      </div>
    )
  }

  

  const Persons = ({peopleToShow,deleteHandler}) => {
    return(
    <div>
        {peopleToShow.map(person =>
            <Person key={person.id} person={person} deleteHandler={deleteHandler} />
        )}
      </div>
    )
  }

  export default Persons