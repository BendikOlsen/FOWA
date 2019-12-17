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

    const totalFeedback = good + neutral + bad

    const avg = (x, z, y) => {
    
        let count = 0

        if (x) {
            count + 1
        } else {
            count -1
        }
        return count
    }
    
    const positive = (positive, total) => {
        return positive / total * 100
    }


        
        
    
    return (
        
        <div>
        <h1>give feedback</h1>
            <Button onClick={goodClick} text='good' />
            <Button onClick={neutralClick} text='neutral' />
            <Button onClick={badClick} text='bad' />

        <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {totalFeedback}</p>
            <p>average {avg(good, neutral, bad)}</p>
            <p>positive {positive(good, totalFeedback)} %</p>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

