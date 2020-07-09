import axios from 'axios';

axios.defaults.baseURL = 'https://custom-tracker.herokuapp.com/';

const actionTypes = {
    LOGIN: 'LOGIN'
};

const logIn = (user, login) => dispatch => {
    axios.post(`auth/${ login ? 'login' : 'register' }`, user)
        .then(res => {
            console.log(res);

            dispatch({
                type: actionTypes.LOGIN,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
};

export {
    actionTypes,
    logIn
};
