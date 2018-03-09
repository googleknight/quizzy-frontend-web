import React, { Component } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import QuestionBox from '../QuestionBox/QuestionBox';

import './Quizzy.css';

const rand = require('random-key');

class Quizzy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: true,
      totalquestions: props.data.length,
      answeredQuestions: [],
    };
  }
  componentWillMount() {
    const responses = [];
    this.props.data.map((question) => {
      if (question.response.length > 0) { responses.push(question.questionId); }
    });
    const buttonState = !(this.state.totalquestions === responses.length);
    this.setState({ answeredQuestions: responses, buttonState });
  }
  onOptionChange=(event, questionId) => {
    const responses = this.state.answeredQuestions;
    responses.indexOf(questionId) === -1 ? responses.push(questionId) : console.log('already answered');
    const buttonState = !(this.state.totalquestions === responses.length);
    this.setState({ answeredQuestions: responses, buttonState });
    const selectedOption = event.target.value;
    const username = this.props.username;
    const body = JSON.stringify({
      username,
      questionId,
      selectedOption,
    });
    fetch('/quizzy/saveResponse', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
      body,
    })
      .then(response => response.json())
      .then((responseObj) => { this.props.handleLogin(username); });
  }


  render() {
    const questionBoxes = this.props.data.map((question, index) =>
      (<QuestionBox
        index={index + 1}
        key={rand.generate(5)}
        question={question}
        username={this.props.username}
        onChange={this.onOptionChange}
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
            disabled={this.state.buttonState}
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
