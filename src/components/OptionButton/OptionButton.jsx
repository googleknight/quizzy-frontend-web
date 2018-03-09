import React from 'react';
import './OptionButton.css';

const OptionButton = props => (
  <div><input
    className="OptionButton"
    type="radio"
    name={props.name}
    value={props.value}
    checked={props.checked}
    onChange={props.onChange}
  />  {props.value}
  </div>
);
export default OptionButton;
