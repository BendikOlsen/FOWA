import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => <div>{counter}</div>
   
const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)


const App = (props) => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleLeftClick = () => {
        const newClicks = {
            left: clicks.left + 1,
            right: clicks. right
        }
        setClicks(newClicks)
    }

    const handleRightClick = () => {
        const newClicks = {
            left: clicks.left,
            right: clicks.right + 1
        }
        setClicks(newClicks)
    }
    return (
        <div>
            <div>
                {clicks.left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {clicks.right}
            </div>
        </div>
    )
}

let counter = 1


ReactDOM.render(
    <App counter={ counter }/>, 
    document.getElementById('root')
)