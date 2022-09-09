import { useState } from 'react'
const Button = ({func, text}) => (
  <button onClick={func}>{text}</button>
)

const Statistics = ({g, n, b}) => {
  const total = g + n + b
  if (total === 0) {
    return(
      <p>No feedback given.</p>
    )
  } else {
    return(
      <>
        <table>
          <tbody>
            <StatisticLine text="Good" value={g}></StatisticLine>
            <StatisticLine text="Neutral" value={n}></StatisticLine>
            <StatisticLine text="Bad" value={b}></StatisticLine>
            <StatisticLine text="All" value={total}></StatisticLine>
            <StatisticLine text="Average" value={(g - b) / total}></StatisticLine>
            <StatisticLine text="Positive" value={(g / total)}></StatisticLine>
          </tbody>
        </table>
      </>
    )
  }
}

const StatisticLine = ({text, value}) => (
  <>
    <tr><td>{text}</td><td>{value}</td></tr>
  </>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Feedback:</h1>
      <Button text="Good" func={()=>setGood(good + 1)}></Button>
      <Button text="Neutral" func={()=>setNeutral(neutral + 1)}></Button>
      <Button text="Bad" func={()=>setBad(bad + 1)}></Button>
      <h1>Statistics:</h1>
      <Statistics g={good} n={neutral} b={bad}></Statistics>
      
    </div>
  )
}

export default App
