import React from 'react'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)

const Content = (props) => {
  return(
    <>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
    </>
  )
}

const Total= (props) => {
  return(
    <p>Number of exercises = {props.parts.map(
       x => x.exercises).reduce(
         (x,y) => x + y
      )}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
        {
        name: 'Fundamentals of React',
        exercises:  10,
      },
      {
        name: 'Using props to pass data',
        exercises : 7,
      },
      {
        name: 'State of a component',
        exercises : 14,
      }
    ] 
  }
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts = {course.parts} />
      </div>
    )
  }

export default App