import axios from 'axios';

const axioken = token => axios.create({
    headers: { 'Authorization': token },
    withCredentials: true
});

export {
    axioken
};
