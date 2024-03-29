import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Anecdote = ({text, votes}) => (
    <>
    <p>{text}</p>
    <p> has {votes} votes. </p>
    </>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0))
    const [mostVoted,setMostVoted] = useState(0)

    const getRandomInt = (min,max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const handleSelected = () => {
            setSelected(getRandomInt(0,props.anecdotes.length))
    }

    const handlePoints = () => {
        const copy = {...points}
        copy[selected] += 1

        setPoints(copy)

        if (copy[selected] > copy[mostVoted]){
            setMostVoted(selected)
        }
    }

    return (
        <div>
            <h1> Anecdote of the day </h1>
            <Anecdote text = {props.anecdotes[selected]} votes={points[selected]}/>
            <Button handleClick={handlePoints} text='upvote this anecdote'/>
            <Button handleClick={handleSelected} text='get a new anecdote'/>

            <h1>Anecdote with most votes</h1> 
            <Anecdote text = {props.anecdotes[mostVoted]} votes={points[mostVoted]}/>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )