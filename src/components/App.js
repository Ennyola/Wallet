import '../public/css/all.css'
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {createHttpLink} from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

import {AuthContextProvider} from "../context/Auth"
import Routes from "../routes/routes"


const link = new createHttpLink({
  uri : 'https://ennet.herokuapp.com/graphiql/',
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
            <Routes/>
        </AuthContextProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
