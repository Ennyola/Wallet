import '../public/css/all.css'
import React from 'react';
import {Route, BrowserRouter, } from 'react-router-dom'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {createHttpLink} from 'apollo-link-http'
import { setContext } from 'apollo-link-context'



import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Funds from './Funds'
import requireAuth from './requireAuth'
import Transactions from './Transaction'
import Help from './Help'

const link = new createHttpLink({
  uri : 'http://127.0.0.1:8000/graphiql/',
  credentials: 'same-origin'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : "",
    }
  }
});

const client =  new ApolloClient({
  link: authLink.concat(link),
  cache : new InMemoryCache()
})

const App = ()=> {
  return (
    <div className="App">
    <ApolloProvider client = {client}>
      <BrowserRouter>
          <Route path = "/login" component = {Login}/>
          <Route path = "/signup" component = {Signup}/>
          <Route path = "/dashboard" component = { requireAuth(Dashboard)} />   
          <Route path = "/funds" component = {requireAuth(Funds)}/>
          <Route path = "/transactions" component = {requireAuth(Transactions)}/>
          <Route path = "/help" component = {requireAuth(Help)}/>
      </BrowserRouter>
    </ApolloProvider>
      
      
    </div>
  );
}

export default App;
