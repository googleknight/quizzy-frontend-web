import React, { Component } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Scores from '../Scores/Scores';
import './ScoreBoard.css';

const rand = require('random-key');


class ScoreBoard extends Component {
  render() {
    console.log(this.props.userscore);
    const scores = this.props.data.map((score, index) =>
      <Scores index={index + 1} key={rand.generate(5)} score={score} />);

    return (
      <div className="ScoreBoard-App-container" >
        <Header username={`Hello ${this.props.username}`} />
        <p className="ScoreBoard-message" >Your Score</p>
        <p className="ScoreBoard-score" >{`${this.props.userscore.answer} /${this.props.userscore.total}`}</p>
        <div className="ScoreBoard-App-body">
          {scores}
          <Button
            className="ScoreBoard-button"
            value="Play Again"
            onClick={this.props.callbackFromApp}
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
export default ScoreBoard;
