import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { Header, Login, Register } from './components';
import './App.scss';

export default _ => {
  const state = useSelector(state => state);
  console.log(state);
  return <div className='App'>
    <Header />

    <div className="routes">
      <Route exact path='/' />
      <Route path='/login' component={ Login } />
      <Route path='/register' component={ Register } />
    </div>
  </div>;
};
