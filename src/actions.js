import { axioken } from './assets/utils';

const actionTypes = {
    LOGIN: 'LOGIN'
};

const logIn = (user, login) => dispatch => {
    axioken
        .post(`auth/${ login ? 'login' : 'register' }`, user)
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
