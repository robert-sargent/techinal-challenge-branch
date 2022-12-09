import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import env from './env';
import {ALL_USERS_QUERY, UPDATE_USER_MUTATION, DELETE_USER_MUTATION} from './queries/queries'
import Table from './pages/Table'
import './app.css'

const client = new ApolloClient({
  uri: env.GRAPHQL_ENDPOINT,
  request: operation => {
    operation.setContext({
      headers: {
        'x-api-key': env.GRAPHQL_API_KEY,
      }
    })
  }
});

// const ALL_USERS_QUERY = gql`
//   query {
//     allUsers {
//       email
//       name
//       role
//     }
//   }
// `;

const App = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <div id="app">
      <Table isLoading={loading} data={data} error={error}/>
    </ div>
  )
}

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));