import React, { Component } from 'react';
import Header from '../Header/Header';
import LoginBox from '../LoginBox/LoginBox';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="App-container" >
        <Header username="" />
        <div className="App-body">
          <LoginBox callbackFromApp={this.props.callbackFromApp} />
        </div>
      </div>
    );
  }
}


export default Login;
