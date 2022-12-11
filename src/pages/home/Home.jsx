import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_USER_MUTATION } from '../../queries/queries';
import './home.css';

import { Link } from 'react-router-dom';

const Table = (props) => {
  const { data, loadUser, refetchData } = props;
  const [deleteUser] = useMutation(DELETE_USER_MUTATION);
  const users = data.allUsers;
  let checkBoxes = [];
  let selected = [];
  const [deleteActive, updateDeleteActive] = useState(false);

  const handleToolTipVisibility = (id, userName, enter) => {
    return enter
      ? (document.getElementById(id).style.visibility = 'visible')
      : (document.getElementById(id).style.visibility = 'hidden');
  };

  const updateCheckBoxes = (userEmail) => {
    selected.indexOf(userEmail) >= 0
      ? selected.splice(selected.indexOf(userEmail))
      : selected.push(userEmail);
    selected.length >= 0 ? updateDeleteActive(true) : updateDeleteActive(false);
  };

  const deleteUsers = () => {
    return deleteUser({ variables: { emails: selected } })
      .then((data) => {
        if (data) {
          refetchData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    refetchData();
  });
  return (
    <div id="table">
      <div className="header-row">
        <h1>Users</h1>
        <div className="button-container">
          <button
            className={deleteActive ? 'delete-button-active' : 'delete-button-static'}
            onClick={() => deleteUsers()}
          >
            Delete
          </button>
        </div>
      </div>
      <table style={{ position: 'relative' }}>
        <tbody>
          <tr>
            <th className="checkbox-column"></th>
            <th>EMAIL</th>
            <th>NAME</th>
            <th>ROLE</th>
          </tr>
          {users.map((user, i) => {
            const randKey = Math.floor(Math.random() * 1000000);
            checkBoxes.push({ randKey, checked: false });
            return (
              <tr key={randKey} className="user-table-row">
                <td className="checkbox-column">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => checkBoxes[i].checked}
                    onClick={() => {
                      checkBoxes[i].checked = !checkBoxes[i].checked
                      updateCheckBoxes(user.email)
                    }}
                  ></input>
                </td>
                <td>
                  <Link
                    to="/details"
                    onClick={() => loadUser(user)}
                    onMouseOver={() => handleToolTipVisibility(randKey, user.email, true)}
                    onMouseLeave={() => handleToolTipVisibility(randKey, user.email, false)}
                  >
                    {user.email}
                  </Link>
                  <div id={randKey} className="tool-tip">
                    Click to edit {user.name}'s account
                  </div>
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
