import React from 'react';
import './details.css';
const Details = (props) => {
const {user} = props;
const {name, email, role} = user;


  return <div>{name}</div>;
};

export default Details;
