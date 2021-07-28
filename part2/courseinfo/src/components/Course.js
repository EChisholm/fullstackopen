import React from 'react'

const Header = ( {course} ) => {
    return (
    <h1>{course.name}</h1>
  )}

  const Content = ({course}) => {
    const parts = course.parts
    return(
        <>
        {parts.map((part) =>
            <Part key={part.exercises} part={part} />
        )}
        </>
    )
  }
  
  const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
  )
  
  
  
const Total= ({parts}) => {
    return(
      <p>Number of exercises = {parts.map(
         x => x.exercises).reduce(
           (x,y) => x + y
        )}</p>
    )
  }
  

const Course = ({course}) => {
    return (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total parts={course.parts} />
      </div>
    )
}


export default Course