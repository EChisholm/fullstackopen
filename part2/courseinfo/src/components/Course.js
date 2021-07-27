import React from 'react'

const Header = ( {course} ) => {
    return (
    <h1>{course.name}</h1>
  )}

  const Content = ({course}) => {
    //console.log('Content props', course);
    const parts = course.parts
    console.log(parts);
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
  
  
  
/*const Total= (props) => {
    return(
      <p>Number of exercises = {props.parts.map(
         x => x.exercises).reduce(
           (x,y) => x + y
        )}</p>
    )
  }
  */

const Course = ({course}) => {
    return (
    <div>
        <Header course={course} />
        <Content course={course} />
        
      </div>
    )
}


export default Course