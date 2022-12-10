import React, {useState} from 'react';
import './details.css';
import Button from '../../utils/button/Button'
const Details = (props) => {
  // const {user} = props;
  // const {name, email, role} = user;
const roleRadios = [
    {value: 'Admin', checked: false}, 
    {value: 'Developer', checked: false},
    {value: 'App Manager', checked: false},
    {value: 'Marketing', checked: false},
    {value: 'Sales', checked: false}
]
const updateRoleRadios = (index) => {
  roleRadios.forEach(radio => {
    radio.checked=false
  })
  roleRadios[index].checked = !roleRadios[index].checked

  console.log(roleRadios)
}
  return (
    <div id="detailsPage">
      <div className="details-header-row">
        <div className="details-header">test test test</div>
        <div className="details-header-button-container"><Button text={'Save'} style={'button-secondary'}/></div>
      </div>
      <div className='details-horizontal-divider'></div>
      <div className='details-body'>
        <div className='details-name-container'>
          <div className='details-name-header'>Name</div>
          <input type="text" className='details-name-input' value={'text@test.com'}/>

        </div>
        <div className='details-vertical-divider'></div>
        <div className='details-role-container'>
          <div className='details-role-header'>Role</div>
          <form className='role-checkbox-container'>
           
              {roleRadios.map((radio, i)=> {
                return (
                  <input 
                  type="radio"
                  className='radio-button' 
                  key={Math.random() * 10000000000}
                  checked={roleRadios[i].checked}
                  onChange={()=>roleRadios[i].checked}
                  onClick={()=>updateRoleRadios(i)}
                   />
                )
              })}
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
