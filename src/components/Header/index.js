import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export default props => {

    const standards = {
        activeClassName: 'active'
    };

    return <nav>
        <NavLink exact to='/' { ...standards }>Home</NavLink>
        <NavLink to='/login' { ...standards }>Log In</NavLink>
    </nav>;

};
