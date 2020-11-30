import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export default props => {

    const standards = {
        activeClassName: 'active'
    };

    const [ open, setOpen ] = useState(false);

    return <nav>
        <NavLink exact to='/' { ...standards }>Home</NavLink>

        <div>
            <button onClick={ _ => setOpen(!open) }>Account</button>

            <div className={ `dropdown${ open ? ' open' : '' }` }>
                <NavLink to='/login' { ...standards }>Log In</NavLink>
                <NavLink to='/register' { ...standards }>Register</NavLink>
            </div>
        </div>
    </nav>;

};
