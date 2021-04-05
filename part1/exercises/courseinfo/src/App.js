import React from 'react'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.name} {props.value}</p>
)

const Content = (props) => {
  return(
    <>
    <Part name={props.part1} value ={props.exercises1} />
    <Part name={props.part2} value ={props.exercises2} />
    <Part name={props.part3} value ={props.exercises3} />
    </>
  )
}

const Total= (props) => {
  return(
    <p>Number of exercises = {props.sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1 = {part1} exercises1= {exercises1} 
                part2 = {part2} exercises2 = {exercises2}
                part3 = {part3} exercises3 = {exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App