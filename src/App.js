import React, { useState } from 'react';
import { ALL_USERS_QUERY } from './queries/queries';
import { useMutation } from '@apollo/react-hooks';
import { RESET_USERS_MUTATION } from './queries/queries';
import './app.css';
import Home from './pages/home/Home.jsx';
import Details from './pages/details/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  const { useQuery } = props;

  const { loading, error, data, refetch } = useQuery(ALL_USERS_QUERY);
  const [user, loadUser] = useState(null);

  if (loading) {
    return (
      <div id="app">
        <div className="loading"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoading={loading}
                data={data}
                error={error}
                loadUser={loadUser}
                refetchData={refetch}
              />
            }
          />
          <Route path="/details" element={<Details user={user} refetchData={refetch} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
