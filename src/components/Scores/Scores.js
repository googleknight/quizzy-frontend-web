import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionButton from '../OptionButton/OptionButton';
import './Scores.css';

const rand = require('random-key');

class Scores extends Component {
  render() {
    return (
      <div className="Scores">
        <p className="Scores-number">{`${this.props.index}.`}</p>
        <p className="Scores-statement">{this.props.score.username}</p>
        <p className="Scores-score">{this.props.score.correct}</p>
        <div className="Scores-options" />
      </div>
    );
  }
}
export default Scores;

