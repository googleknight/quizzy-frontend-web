import React, { Component } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import QuestionBox from '../QuestionBox/QuestionBox';

import './Quizzy.css';

const rand = require('random-key');

class Quizzy extends Component {
  render() {
    const questionBoxes = this.props.data.map((question, index) =>
      (<QuestionBox
        index={index + 1}
        key={rand.generate(5)}
        question={question}
        username={this.props.username}
      />));
    return (
      <div className="Quizzy-App-container" >
        <Header username={`Hello ${this.props.username}`} />
        <div className="Quizzy-App-body">
          {questionBoxes}
          <Button
            className="Quizzy-button"
            value="Calculate"
            onClick={() => this.props.callbackFromApp(this.props.username)}
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
export default Quizzy;
