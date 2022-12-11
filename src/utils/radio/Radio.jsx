import React from 'react';
import './radio.css';
const Radio = (props) => {
  const { value, userRole, setUserRole } = props;

  return (
    <>
      <input
        type="radio"
        className='radio-button'
        checked={userRole}
        value={value}
        onChange={(e) => setUserRole(e.target.value)}
      />
    </>
  );
};

export default Radio;
