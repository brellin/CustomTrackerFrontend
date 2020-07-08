import React from 'react';
import { Route } from 'react-router-dom';

import { Header, Login } from './components';
import './App.scss';

export default _ => {
  return <div className='App'>
    <Header />

    <div className="routes">
      <Route exact path='/' />
      <Route path='/login' component={ Login } />
      <Route path='/register' />
    </div>
  </div>;
};
