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
const deletePerson = (id) => {
    axios.delete(baseUrl+id)
}
const updatePerson = (id, newNumber) => {
    //console.log(id.id);
    const updatePerson = {...id , number: newNumber}
    const request = axios.put(baseUrl+`/${id.id}`,updatePerson)
    return request.then(response => {
        //console.log(response.data);
        return response.data
    })
}

export {getAll, addPerson, deletePerson, updatePerson}