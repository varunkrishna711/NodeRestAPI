import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL

export const getTask = () => {
    return axios.get(apiURL);
}

export const addTask = (task) => {
    return axios.post(apiURL,task);
}

export const updateTask = (id,task) => {
    return axios.put(apiURL+ "/" +id,task);
}

export const deleteTask = (id) => {
    return axios.delete(apiURL + "/" + id);
}