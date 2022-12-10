import React from 'react';
import './button.css';
const Button = (props) => {
  const { text, style, checkBoxes } = props;
  const handleClick=()=>{
    console.log(checkBoxes)
  }
  return (
    <button className={style} onClick={()=>handleClick()}>
      {text}
    </button>
  );
};

export default Button;
