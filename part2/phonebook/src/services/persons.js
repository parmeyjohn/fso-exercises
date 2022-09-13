import axios from 'axios'
const base = 'http://localhost:3001/persons'

const getData = () => {
    return axios.get(base)
}

const createPerson = (newPerson) => {
    return axios.post(base, newPerson)
}

const updatePerson = (id, newData) => {
    return axios.put(`${base}/${id}`, newData)
}

const delPerson = (id, name) => {
    if (window.confirm(`Do you want to delete ${name} from the phonebook?`)) {
        return axios.delete(`${base}/${id}`)
    }
}

const personServ = {getData, createPerson, updatePerson, delPerson}
export default personServ