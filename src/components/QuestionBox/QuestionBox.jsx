import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionButton from '../OptionButton/OptionButton';
import './QuestionBox.css';

const rand = require('random-key');

class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: '',
      response: this.props.question.response,
    };
  }
  handleOnChange=(event) => {
    this.setState({ response: event.target.value });
    this.props.onChange(event, this.props.question.questionId);
  }
  render() {
    const options = this.props.question.options.map(option => (<OptionButton
      key={rand.generate(5)}
      value={option}
      checked={this.state.response === option}
      name={this.props.index}
      onChange={event => this.handleOnChange(event)}
    />));
    return (
      <div className="QuestionBox">
        <p className="QuestionBox-number">{`Question  ${this.props.index}`}</p>
        <p className="QuestionBox-statement">{this.props.question.statement}</p>
        <div className="QuestionBox-options">
          {options}
        </div>

      </div>
    );
  }
}

QuestionBox.propTypes = {
  callbackFromApp: PropTypes.func,
};

QuestionBox.defaultProps = {
  callbackFromApp: () => null,
};
export default QuestionBox;
