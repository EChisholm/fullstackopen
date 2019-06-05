import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}> {text}</button>
)

const Statistic = ({text, value}) => (
    <> 
    <td>{text}</td> 
    <td> {value}</td>
    </>
)

const Statistics = ({good, neutral, bad}) =>{
    const allFeedback = () => good + neutral + bad
    const averageFeedback = () => (good - bad)/allFeedback()
    const positiveFeedback = () => good/allFeedback()
    if (allFeedback()) {
        return(
            <div>
            <table>
                <tbody>
                    <tr><Statistic text='good' value={good}/></tr>
                    <tr><Statistic text='neutral' value={neutral}/></tr>
                    <tr><Statistic text='bad' value={bad}/></tr>
                    <tr><Statistic text='all' value={allFeedback()}/></tr>
                    <tr><Statistic text='average' value={averageFeedback()}/></tr>
                    <tr><Statistic text='positive' value={positiveFeedback()}/></tr>
                </tbody>
            </table>
            </div>
        )

    }
    return (
        <div>
            No feedback given
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text= 'neutral' />
            <Button handleClick= {handleBadClick} text='bad' />

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
    )