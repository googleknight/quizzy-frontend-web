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
      response:this.props.question.response,
    };
  }
  onOptionChange=(event)=>{
    let username=this.props.username;
    let questionId=this.props.question.questionId;
    let selectedOption=event.target.value;
    let body=JSON.stringify(
        {username,
        questionId,
        selectedOption}); 
    fetch('/quizzy/saveResponse', { method: 'POST', headers: {
        "Content-type": "application/json; charset=utf-8"
      }, 
      body: body})
          .then(response => response.json())
          .then((responseObj) => {
              console.log(responseObj)
              this.setState({response:selectedOption})
          });
  }

  render() {
    const options = this.props.question.options.map(option => (<OptionButton
      key={rand.generate(5)}
      value={option}
      checked={this.state.response===option}
      name={this.props.index}
      onChange={this.onOptionChange}
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
