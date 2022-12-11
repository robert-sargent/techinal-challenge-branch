import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER_MUTATION } from '../../queries/queries';
import './details.css';
import Radio from '../../utils/radio/Radio';
import MessageModal from '../../utils/messageModal/MessageModal';

const Details = (props) => {
  const { email, name, role} = props.user;
  const [userName, setUserName] = useState(name);
  const [newRole, setUserRole] = useState(role);
  const [updateUser] = useMutation(UPDATE_USER_MUTATION);
  const roles = ['Admin', 'Developer', 'APP_MANAGER', 'Marketing', 'Sales'];
  const [successMessage, handleSuccessMessage] = useState(null);
  const [errorMessage, handleErrorMessage] = useState(null);
  let [redirectTimer, handleRedirectTimer] = useState(5);
  const navigate = useNavigate();
  let error = false

  const startRedirectTimer = () => {
    let timer = setInterval(() => {
      if (redirectTimer === 0) {
        handleSuccessMessage(null);
        handleErrorMessage(null);
        clearInterval(timer);
        handleRedirectTimer(3);
        return navigate('/');
      } else {
        buildMessage();
        handleRedirectTimer(redirectTimer--);
      }
    }, 1000);
  };

  const buildMessage = () => {
    if (!error) {
      handleSuccessMessage(
        `${userName}'s information has been successfully updated. You will be automaticall redirected to the homepage in ${redirectTimer} seconds.`
      );
    } else {
      handleErrorMessage(
        `There was an error while updating ${name}'s information. Please try again later. You will be automatically redirected to the homepage in ${redirectTimer} seconds.`
      );
    }
  };

  const handleUpdate = () => {
    return updateUser({
      variables: { email, newAttributes: { name: userName, role: newRole } },
    })
      .then((data) => {
        if (data) {
          error = false
          startRedirectTimer();
        }
      })
      .catch((err) => {
        if (err) {
          error = true
          startRedirectTimer();
        }
      });
  };

  return (
    <div id="detailsPage">
      {successMessage && (
        <MessageModal successMessage={successMessage} redirectTimer={redirectTimer} />
      )}
      {errorMessage && <MessageModal errorMessage={errorMessage} redirectTimer={redirectTimer} />}
      <div className="details-header-row">
        <div className="details-header">{email}</div>
        <div className="details-header-button-container">
          <button className="details-button" onClick={() => handleUpdate()}>
            Save
          </button>
        </div>
      </div>
      <div className="details-horizontal-divider"></div>
      <div className="details-body">
        <div className="details-name-container">
          <div className="details-name-header">Name</div>
          <input
            type="text"
            className="details-name-input"
            placeholder={name}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="details-vertical-divider"></div>
        <div className="details-role-container">
          <div className="details-role-header">Role</div>
          <div className="role-checkbox-container">
            {roles.map((role, i) => {
              return (
                <Radio
                  key={Math.random() * 100000}
                  newRole={newRole}
                  setUserRole={setUserRole}
                  label={roles[i]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
