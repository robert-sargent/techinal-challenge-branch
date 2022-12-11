import React from 'react';
import './radio.css';

const Radio = (props) => {
  const { newRole, setUserRole, label } = props;
  return (
    <div>
      <input
        type="radio"
        checked={newRole === label.toUpperCase()}
        onChange={() => setUserRole(label.toUpperCase())}
      />
      <span className='radio-label'>{label === "APP_MANAGER" ? 'App Manager' : label}</span>
    </div>
  );
};

export default Radio;
