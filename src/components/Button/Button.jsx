import React from 'react';
import './Button.css';

const Button = props => (
  <button
    className="Button-style"
    type="button"
    disabled={props.disabled}
    onClick={() => {
      props.onClick();
    }}
  >{props.value}
  </button>
);
export default Button;
