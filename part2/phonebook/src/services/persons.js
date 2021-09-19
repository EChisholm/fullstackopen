import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then( (response) => response.data)
}

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then((response) => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => response.data)
}

const put = (id,editedPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, editedPerson)
    return request.then((response) => response.data)
}

const personsService = {getAll,create, remove, put}
export default personsService