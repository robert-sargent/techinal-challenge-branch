import React from 'react';
import './table.css';
import Button from '../utils/button/Button';

const Table = (props) => {
  const { isLoading, data, error } = props;
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
          {!isLoading &&
            users.map((user) => {
              return (
                <tr key={Math.floor(Math.random() * 1000000)} className='user-table-row'>
                  <td className="checkbox-column">
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <a href={user.email}>{user.email}</a>
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
