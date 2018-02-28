import React from 'react';
import './Header.css';

const Header = props => (
  <div className="header-container">
    <p className="heading-quizzy">Quizzy</p>
    <p className="heading-username">{props.username}</p>
  </div>
);
export default Header;
