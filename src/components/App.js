import '../public/css/all.css'
import React from 'react';
import {Route, BrowserRouter, } from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import Signup from './Signup'


const App = ()=> {
  return (
    <div className="App">
      {/* <Header/> */}
    <BrowserRouter>
        <Route path = "/login" component = {Login}/>
        <Route path = "/signup" component = {Signup}/>
          
        
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
