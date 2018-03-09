import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Scores.css';


class Scores extends Component {
  render() {
    return (
      <div className="Scores">
        <p className="Scores-number">{`${this.props.index}. `}<span className="Scores-score">{`${this.props.score.username}`}</span></p>
        {/* <p className="Scores-username" /> */}
        <p className="Scores-score">{this.props.score.correct}</p>
      </div>
    );
  }
}
export default Scores;

