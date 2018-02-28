import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './LoginBox.css';
import Button from '../Button/Button';

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:''
    };
  }
  getUsername=(event)=>{
    this.setState({username:event.target.value});
  }
  doLogin=(event)=>{
     this.props.callbackFromApp(this.state.username);
    }

  render() {
    return (
      <div className="LoginBox">
        <div className="LoginBox-left">
          <p className="LoginBox-left-message">Welcome</p>
          <p className="LoginBox-left-message">to</p>
          <p className="LoginBox-left-appname">Quizzy!</p>
        </div>
        <div className="LoginBox-right">
          <p className="LoginBox-right-login">Login</p>
          <p className="LoginBox-right-username">Username</p>
          <input 
            className="LoginBox-right-Input" 
            type="text" 
            onChange={(event) => {
              this.getUsername(event);
            }} />
          <Button
            className="LoginBox-right-button"
            value="Login"
            onClick={this.doLogin}
          />
        </div>
      </div>
    );
  }
}
// LoginBox.propTypes = {
//   callbackFromApp: PropTypes.func,
// };

// LoginBox.defaultProps = {
//   callbackFromApp: () => null,
// };
export default LoginBox;
