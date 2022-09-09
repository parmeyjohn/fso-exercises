const Header = (props) => (
  <h1>{props.name}</h1>
)

const Part = (props) => (
  <>
    <p>
      {props.pt} {props.ex}
    </p>
  </>
)

const Content = (props) => (
  <>
    <Part pt={props.course.parts[0].name} ex={props.course.parts[0].exercises}></Part>
    <Part pt={props.course.parts[1].name} ex={props.course.parts[1].exercises}></Part>
    <Part pt={props.course.parts[2].name} ex={props.course.parts[2].exercises}></Part>
  </>
)

const Total = (props) => (
  <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
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
    <>
      <Header name={course.name}></Header>
      <Content course={course}></Content>
      <Total e1={course.parts[0].exercises} e2={course.parts[1].exercises} e3={course.parts[2].exercises}></Total>
    </>
  )
}


export default App