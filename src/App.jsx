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
    };
  }
  render() {
    let homepage;
    if (this.state.homepage === 'Login') {
      homepage = (<Login />);
    } else if (this.state.homepage === 'Quizzy') {
      homepage = (<Quizzy />);
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
