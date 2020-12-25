import '../public/css/all.css'
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {createHttpLink} from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

import {FundsContextProvider} from '../context/funds'
import {AuthContextProvider} from "../context/Auth"
import Routes from "../routes/routes"


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
        <AuthContextProvider>
          <FundsContextProvider>
            <Routes/>
          </FundsContextProvider>
        </AuthContextProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
