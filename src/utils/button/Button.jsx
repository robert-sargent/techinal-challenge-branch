import React from 'react';
import './button.css';
const Button = (props) => {
  const { text, style, handleClick } = props;

  return (
    <button className={style} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
