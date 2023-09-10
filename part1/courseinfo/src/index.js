import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return (
    <div>
      <p>Half Stack application development</p>
    </div>
  )
}
const Content  = (props) => {
  return (
    <div>
      <p>{props.nombre} {props.cant}</p>
    </div>
  )
}
const Total  = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  )
}


const App = () => {
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{<Header/>}</h1>
      <p>
        <Content nombre ={part1} cant = {exercises1} />
      </p>
      <p>
      <Content nombre ={part2} cant = {exercises2} />
      </p>
      <p>
      <Content nombre ={part3} cant = {exercises3} />
      </p>
      <p> <Total total={exercises1 + exercises2 + exercises3}/></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))