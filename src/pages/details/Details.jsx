import React, { useState } from 'react';
import './details.css';
import Button from '../../utils/button/Button';
import Radio from '../../utils/radio/Radio';
const Details = (props) => {
  const { user } = props;
  let currentUserRole = 'ADMIN'
  const [newRole, setUserRole] = useState(currentUserRole);
  const roles = [
    { role: 'ADMIN', key: 'dsfouygewfljhbc' },
    { role: 'DEVELOPER', KEY: 'QWPIUEH23PIURB' },
    { role: 'APP MANAGER', key: 'wuyfgsouhvbods' },
    { role: 'MARKETING', key: 'sduyfbsaouvcbe' },
    { role: 'SALES', key: 'fiupwbhepfiuweb' },
  ];
  const handleUpdate = () => {
    console.log(newRole)
  }
  return (
    <div id="detailsPage">
      <div className="details-header-row">
        <div className="details-header">test test test</div>
        <div className="details-header-button-container">
          <Button text={'Save'} style={'button-secondary'} />
        </div>
      </div>
      <div className="details-horizontal-divider"></div>
      <div className="details-body">
        <div className="details-name-container">
          <div className="details-name-header">Name</div>
          <input type="text" className="details-name-input" value={'text@test.com'} />
        </div>
        <div className="details-vertical-divider"></div>
        <div className="details-role-container">
          <div className="details-role-header">Role</div>
          <form className="role-checkbox-container">
            {roles.map((role) => {
              return <Radio currentRole={currentUserRole} value={role.value}  setUserRole={setUserRole}/>;
            })}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
