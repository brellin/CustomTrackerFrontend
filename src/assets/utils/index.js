import axios from 'axios';

let a = token => axios.create({
    baseURL: 'https://custom-tracker.herokuapp.com/',
    headers: { 'Authorization': token },
    withCredentials: true
});

export const axioken = a();
