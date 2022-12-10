import React, {useState} from 'react';
import { ALL_USERS_QUERY, UPDATE_USER_MUTATION, DELETE_USER_MUTATION } from './queries/queries';
import Home from './pages/home/Home.jsx';
import Details from './pages/details/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  const { useQuery } = props;
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);
  const [user, loadUser] = useState(null)
  console.log(user)
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoading={loading} data={data} error={error} loadUser={loadUser}/>} />
          <Route path="/details" element={<Details user={user}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
