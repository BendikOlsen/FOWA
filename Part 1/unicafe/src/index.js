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

const DisplayStatistic = ({text, value, unit}) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{value} {unit}</td>
            </tr>
        </tbody>
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
    
    if(totalFeedback=== 0) {
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
            <table>
                <DisplayStatistic text="good" value={good} />
                <DisplayStatistic text="bad" value={bad} />
                <DisplayStatistic text="neutral" value={neutral} />
                <DisplayStatistic text="all" value={totalFeedback} />
                <DisplayStatistic text="avarage" value={(good-bad/totalFeedback)} />
                <DisplayStatistic text="positive" value={positive(good, totalFeedback)} unit="%" />
            </table>
        </div>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const goodClick = () => {
        setGood(good +1)
    }
    const neutralClick = () => {
        setNeutral(neutral +1)
    }
    const badClick = () => {
        setBad(bad +1)
    }

    return (
        <div>
        <h1>give feedback</h1>
            <Button onClick={goodClick} text='good' />
            <Button onClick={neutralClick} text='neutral' />
            <Button onClick={badClick} text='bad' />
            <Statistics  good={good} neutral={neutral} bad={bad} />
        </div>   
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

