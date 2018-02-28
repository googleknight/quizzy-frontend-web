import React, { Component } from 'react';
import Login from '../src/components/Login/Login';
import Quizzy from '../src/components/Quizzy/Quizzy';
import ScoreBoard from '../src/components/ScoreBoard/ScoreBoard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: 'Login',
      data:[],
      username:''
    };
  }
  calculateScore=(username)=>  {
    fetch('/quizzy/score', { method: 'POST', headers: {
      "Content-type": "application/json; charset=utf-8"
    }, body: JSON.stringify(username) })
      .then(response => response.json())
      .then((responseObj) => {
        this.setState({
          homepage: 'Score',
          data:responseObj.data,
          username
        });
      });
  }

  handleLogin=(username)=>  {
    fetch('/quizzy/login', { method: 'POST', headers: {
      "Content-type": "application/json; charset=utf-8"
    }, body: JSON.stringify(username) })
      .then(response => response.json())
      .then((responseObj) => {
        this.setState({
          homepage: 'Quizzy',
          data:responseObj.data,
          username
        });
      });
  }



  render() {
    let homepage;
    if (this.state.homepage === 'Login') {
      homepage = (<Login callbackFromApp={this.handleLogin} />);
    } else if (this.state.homepage === 'Quizzy') {
      homepage = (<Quizzy
         data={this.state.data} 
         username={this.state.username}
         callbackFromApp={this.calculateScore}/>);
    } else if (this.state.homepage === 'Score') {
      homepage = (<ScoreBoard />);
    }
    return (
      <div className="App">
        { homepage }
      </div>
    );
  }
}

export default App;
