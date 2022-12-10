import React from 'react';
import './home.css';
import Button from '../../utils/button/Button';
import { Link } from 'react-router-dom';

const Table = (props) => {
  const { isLoading, data, error, loadUser } = props;
  const users = data.allUsers;

  console.log(users);

  return (
    <div id="table">
      <div className="header-row">
        <h1>Users</h1>
        <div className="button-container">
          <Button style={'button-primary'} text={'Delete'} />
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <th className="checkbox-column"></th>
            <th>EMAIL</th>
            <th>NAME</th>
            <th>ROLE</th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={Math.floor(Math.random() * 1000000)} className="user-table-row">
                <td className="checkbox-column">
                  <input type="checkbox"></input>
                </td>
                <td>
                  <Link to="/details" onClick={loadUser(user)}>
                    {user.email}
                  </Link>
                </td>
                <td>{user.name}</td>
                <td>{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
