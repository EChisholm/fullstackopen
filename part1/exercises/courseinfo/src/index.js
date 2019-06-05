import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
    <>
    <h1>{props.course}</h1>
    </>
)

const Content = (props) => (
    <>
    <p> {props.parts[0].name} {props.parts[0].exercises}</p>
    <p> {props.parts[1].name} {props.parts[1].exercises}</p>
    <p> {props.parts[2].name} {props.parts[2].exercises}</p>
    </>
)

const Total = (props) => (
    <>
    <p> Number of exercises = {props.values.reduce((a,b) => a + b, 0)}</p>
    </>
)

const App = () => {
    const course = {
        name: "Half Stack app development",
        parts: [
        { name: 'Fundamentals of React', exercises:10},
        { name: "Using props to pass data", exercises: 7},
        { name: "State of a component", exercises: 12}
    ]
}
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total  values={course.parts.map((item) => item.exercises)}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
