import axios from "axios";

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response =>{
        return response.data
    })
}
const addPerson = (person) => {
    const request = axios.post(baseUrl,person)
    return request.then(response =>{
        return response.data
    })
}

export {getAll, addPerson}