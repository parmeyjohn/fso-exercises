import axios from 'axios'
//const base = '/api/persons'
const base = '/api/persons'
const getData = () => {
    console.log(base)
    return axios.get(base)
}

const createPerson = (newPerson) => {
    console.log(base)
    console.log(newPerson)
    return axios.post(base, newPerson)
}

const updatePerson = (id, newData) => {
    console.log(id)
    console.log(newData)
    return axios.put(`${base}/${id}`, newData)
}

const delPerson = (id, name) => {
    console.log('delPerson:', id, name)
    if (window.confirm(`Do you want to delete ${name} from the phonebook?`)) {
        
        return axios.delete(`${base}/${id}`)
    }
}

const personServ = {getData, createPerson, updatePerson, delPerson}
export default personServ