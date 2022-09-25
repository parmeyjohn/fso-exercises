import { useState, useEffect } from 'react'

import personServ from './services/persons'

const Notif = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='success'>
      {message}
    </div>
  )
}

const Search = ({val, func}) => {
  return(
    <>
      <form>
        <input value={val} onChange={func} />
      </form>
    </>
  )
}

const Person = ({text, changeFunc}) => {
  return (
    <input value={text} onChange={(e) => changeFunc(e.target.value)} />
  )
}

const PersonForm = ({newName, newNum, setNewName, setNewNum, addPerson, searchVal}) => {
  return (
    <form onSubmit={addPerson}>
        <div>
          <p>Name:</p>
          <Person text={newName} changeFunc={setNewName}></Person>
          <br></br>
          <p>Number:</p>
          <Person text={newNum} changeFunc={setNewNum}></Person>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
  ])
  
  
  useEffect(() => {
    personServ.getData()
      .then(response => setPersons(response.data))
  }, 
  [])
  
   
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [searchVal, setSearchVal] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(e => e.name).indexOf(newName) === -1
        && persons.map(e => e.number).indexOf(newNum) === -1) {
    const newPerson = {name: newName, number: newNum}
    
    personServ.createPerson(newPerson)
      .then( response => {
        setPersons(persons.concat(response.data))
        setSuccessMsg(`${newName} : ${newNum} was added to the phonebook`)
        setNewName('')
        setNewNum('')
        
      })
    } else {
        
      alert(`${newName}: ${newNum} is already in the phonebook.`)
    }
  }
  const allProps = {
    newName,
    newNum,
    searchVal,
    setNewName,
    setNewNum,
    addPerson
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notif message={successMsg}></Notif>
      <h2>Search:</h2>
      <Search val={searchVal} func={(e) => setSearchVal(e.target.value)}></Search>
      <h2>Add Entry:</h2>
      <PersonForm {...allProps}></PersonForm>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(
          p => p.name.toLowerCase().includes(searchVal))
          .map((p) => 
          <li key={p.name}> {p.name}: {p.number} <button onClick={() => personServ.delPerson(p.id, p.name).then(() => setPersons(persons.filter((p2) => p2.id !== p.id )))}>delete</button></li>)}
      </ul>
      ...
    </div>
  )
}

export default App