import '../public/css/all.css'
import React from 'react';
import {Route, BrowserRouter, } from 'react-router-dom'

import Header from './Header'
import Login from './Login'


const App = ()=> {
  return (
    <div className="App">
      {/* <Header/> */}
    <BrowserRouter>
        <Route path = "/login" component = {Login}>
          
        </Route>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
