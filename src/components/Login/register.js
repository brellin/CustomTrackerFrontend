import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logIn } from '../../actions';

export default props => {

    const dispatch = useDispatch();

    const [ fields, setFields ] = useState({
        username: '',
        password: ''
    });

    return <div className="login">
        <h1>Register</h1>

        <form onSubmit={ e => e.preventDefault() }>
            { Object.keys(fields).map(f => <div className="input" key={ f }>
                <label>{ f }</label>

                <input
                    onChange={ e => setFields({
                        ...fields,
                        [ f ]: e.target.value
                    }) }
                    type={ f === 'password' ? f : 'text' }
                />
            </div>) }

            <button onClick={ e => {
                e.preventDefault();
                dispatch(logIn(fields, false));
            } }>Submit</button>
            <p>Already have an account? <Link to='/login'>Log In</Link></p>
        </form>
    </div>;

};
