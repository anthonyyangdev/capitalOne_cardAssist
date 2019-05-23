import React, { Component } from 'react';
import YesNoForm from './answerTemplates/YesNoForm';
import CheckBoxForm from './answerTemplates/CheckBoxForm';
import Box from '@material-ui/core/Box'

const backgroundStyle = {
  style: 'blue'
}

class QuestionPage extends Component {
  constructor(props) {
    super(props)
    // const question = this.props.question
    // const choices = this.props.choices
    this.state = {
      question: 'Who are you?',
      choices: {
        type: 'yesNo',
        answers: [
          {
            answer: 'qwe'
          },
          {
            answer: 'wqe'
          },
          {
            answer: 'weq'
          },
          {
            answer: '234'
          }
        ]
      }
    }
    this.renderQuestion = this.renderQuestion.bind(this)
    this.renderAnswerTemplate = this.renderAnswerTemplate.bind(this)
  }

  renderQuestion() {
    return (
      <Box style={{
        width: '50%',
        margin: '0 auto'
      }}>
        <p>{this.state.question}</p>
      </Box>
    )
  }

  renderAnswerTemplate() {
    switch (this.state.choices.type) {
      case 'checkBox':
        return (
          <CheckBoxForm answers={this.state.choices.answers} />)
      case 'yesNo':
        return <YesNoForm />
      default:
        console.log("Error")
        throw "Not valid path."
    }
  }

  render() {
    return (
      <div style={backgroundStyle}>
        {/* Place your question in here */}
        {this.renderQuestion()}
        {this.renderAnswerTemplate()}
      </div>
    )
  }
}

export default QuestionPage

