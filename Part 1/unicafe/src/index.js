import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    const {onClick, text} = props
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const totalFeedback = good + neutral + bad

    const positive = (positive, total) => {
        return positive / total * 100
    }
    
    if(props.feedbackGiven === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    } 

    return (
        <div>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {totalFeedback}</p>
            <p>average {(good - bad) / totalFeedback}</p>
            <p>positive {positive(good, totalFeedback)} %</p>
        </div>
    )
    
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [feedbackGiven, setAll] = useState(0)
    
    const goodClick = () => {
        setAll(feedbackGiven +1)
        setGood(good +1)
    }
    const neutralClick = () => {
        setAll(feedbackGiven +1)
        setNeutral(neutral +1)
    }
    const badClick = () => {
        setAll(feedbackGiven +1)
        setBad(bad +1)
    }

    return (
        <div>
        <h1>give feedback</h1>
            <Button onClick={goodClick} text='good' />
            <Button onClick={neutralClick} text='neutral' />
            <Button onClick={badClick} text='bad' />
            <Statistics  good={good} neutral={neutral} bad={bad} feedbackGiven={feedbackGiven} />
        </div>   
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

