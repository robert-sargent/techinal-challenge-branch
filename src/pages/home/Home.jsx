import React, { useState, useEffect } from 'react';
import './home.css';
import Button from '../../utils/button/Button';
import { Link } from 'react-router-dom';

const Table = (props) => {
  const { isLoading, data, error, loadUser } = props;
  const users = data.allUsers;
  const checkBoxes = [];

  const handleToolTipVisibility = (id, userName, enter) => {
    return enter
      ? (document.getElementById(id).style.visibility = 'visible')
      : (document.getElementById(id).style.visibility = 'hidden');
  };
  const updateCheckBoxes = (index, isChecked) => {
    checkBoxes[index].checked = isChecked
  }
  const deleteUsers =() => {
    // console.log(checkBoxes)
  }
 useEffect(()=> {

  }, [checkBoxes])
  return (
    <div id="table">
      <div className="header-row">
        <h1>Users</h1>
        <div className="button-container">
          <Button style={'button-primary'} text={'Delete'} checkBoxes={checkBoxes}/>
        </div>
      </div>
      <table                     style={{position:'relative'}}>
        <tbody>
          <tr>
            <th className="checkbox-column"></th>
            <th>EMAIL</th>
            <th>NAME</th>
            <th>ROLE</th>
          </tr>
          {users.map((user, i) => {
            const randKey = Math.floor(Math.random() * 1000000);
            checkBoxes.push({randKey, checked:false})
            return (
              <tr key={randKey} className="user-table-row">
                <td className="checkbox-column">
                  <input type="checkbox" 
                  defaultChecked={false} 
                  onChange={()=>checkBoxes[i].checked}
                  onClick={()=>checkBoxes[i].checked = !checkBoxes[i].checked}
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
