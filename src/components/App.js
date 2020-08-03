import '../public/css/all.css'
import React from 'react';
import {Route, BrowserRouter, } from 'react-router-dom'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'



import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'


const client =  new ApolloClient({
  uri : 'http://127.0.0.1:8000/graphiql/',
  cache : new InMemoryCache()
})

const App = ()=> {
  return (
    <div className="App">
    <ApolloProvider client = {client}>
      <BrowserRouter>
          <Route path = "/login" component = {Login}/>
          <Route path = "/signup" component = {Signup}/>
          <Route path = "/dashboard" component = {Dashboard} />   
      </BrowserRouter>
    </ApolloProvider>
      
      
    </div>
  );
}

export default App;
