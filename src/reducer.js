import { actionTypes } from './actions';

const initialState = {
    token: null,
    user: null,
};

export default (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.LOGIN:
            const { user, token } = action.payload;
            return { user, token };

        default:
            return { ...state };

    }

};
