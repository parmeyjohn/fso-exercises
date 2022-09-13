import {useState, useEffect} from 'react'
import axios from 'axios'

const Countries = ({countryList, search}) => {
  const newList = countryList.filter((c)=>c.name.common.toLowerCase().includes(search))
  

  if (newList.length > 10) {
    return (
      <>
        <p>Too many matches, specify another filter</p>
      </>
    )
  } else if (newList.length === 1) {
    const c = newList[0]
    const info = {
      name: c.name.common,
      languages: c.languages,
      capital: c.capital,
      area: c.area,
      flag: c.flags.png 
    }
    return(
      <Country {...info}></Country>
    )
  } 
    else {
      return (
      <ul>
        {newList.map((c) => <li key={c.name.common}>{c.name.common} <button onClick={() => displayCountry(c)}>{buttonVal}</button></li>)}
      </ul>
    )
  }
}

const Country = ({name, languages, capital, area, flag}) => {
  return(
    <>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      Languages:
      <ul> 
        {Object.values(languages).map((l) => <li key={l}>{l}</li>)}
      </ul>
      <img src={flag} alt={`The flag of ${name}`}></img>
    </>
  )
}

function App() {
  const [searchVal, setSearchVal] = useState('')
  const [countries, setCountries] = useState([])

  useEffect( () => {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then((response) => setCountries(response.data))
    })
  
  return (
    <div>
      Find countries: 
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
        <Countries countryList={countries} search={searchVal}></Countries>
      </form>
    </div>
  );
}

export default App;
