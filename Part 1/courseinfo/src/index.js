import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    
    return (<h1> {props.course.name} </h1>)
}

const Content = (props) => {
    return (
        <>
             {props.parts.map(parts => <p> {parts.name}  {parts.exercises}</p>)} 
        </>
    )

}

const Total = (props) => {

    const sum = (p1, p2, p3) => {
        return p1 + p2 + p3
    }
    
    return (
        <>
            <p> Numer of exercises {sum(props.parts[0].exercises, props.parts[1].exercises, props.parts[2].exercises)} </p>
        </>
    )
}

const App = () => {

    const course = {
        name: 'Half stack application developemnt',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
        
  return (
    <div>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
   </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))