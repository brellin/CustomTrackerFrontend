import React, { useState } from 'react';
import axios from 'axios';

export default props => {

    const [ fields, setFields ] = useState({
        username: '',
        password: ''
    });

    const submit = _ => axios.post('https://custom-tracker.herokuapp.com/auth/login', fields)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

    return <div className='login'>
        <form onSubmit={ e => e.preventDefault() }>
            { Object.keys(fields).map(f => <div className="input" key={ f }>
                <label>{ f }</label>
                <input
                    onChange={ e => setFields({
                        ...fields,
                        [ f ]: e.target.value
                    }) }
                    type={ f === 'password' ? f : "text" }
                />
            </div>) }
            <button onClick={ submit }>Log In</button>
        </form>
    </div>;

};
