import React from 'react'

const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map((p)=><Part key={p.id} part={p}></Part>)}      
  </>


const Course = ({course}) => {
    return (
      <>
        <Header course={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total sum={course.parts.reduce((sum, p) => (p.exercises + sum), 0) } />
      </>
    )
}


export default Course