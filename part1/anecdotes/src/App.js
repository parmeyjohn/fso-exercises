import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const [max_index, setMaxIndex] = useState(0)
  const [max_val, setMaxVal] = useState(0)

  const getAnecdote = () => {
    const i = Math.floor(Math.random() * anecdotes.length)
    setSelected(i)
  }

  const onVote = () => {
    const copy = [...points]
    copy[selected] += 1 
    setPoints(copy)
    if (copy[selected] >= max_val) {
      setMaxVal(copy[selected])
      setMaxIndex(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day: </h1>
      <p>{anecdotes[selected]} has {points[selected]} votes.</p>
      <button onClick={onVote}>Vote</button>
      <button onClick={getAnecdote}>Random Quote</button>
      
      <h1>Anecdote with the most votes:</h1>
      <p>{anecdotes[max_index]} has {max_val}</p>
    </div>
  )
}

export default App