import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = (props) => {
    console.log('props value is')
    const {onClick, text} = props
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const App = (props) => {
   
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, settAll] = useState([])

    const handleLeftClick = () => {
      settAll(allClicks.concat('L'))
      setLeft(left + 1)
    }

    const handleRightClick = () => {
      settAll(allClicks.concat('R'))
      setRight(right +1)    
    }

    const reset = () => {
      settAll(allClicks.concat('0'))
      setRight(right - right)
      setLeft(left - left)
    }
   
      
      return (
        <div>
          <div>
            {left}
            <Button onClick={handleLeftClick} text='left' />
            <Button onClick={handleRightClick} text='right' />
            {right}
            <p><Button onClick={reset} text='zero'/></p>
            <History allClicks={allClicks} />
          </div>
        </div>
      )
    }

let counter = 1



ReactDOM.render(
    <App counter={ counter }/>, 
    document.getElementById('root')
)