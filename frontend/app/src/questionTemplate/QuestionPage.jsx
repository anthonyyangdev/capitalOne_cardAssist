import React, { Component } from 'react';
import YesNoForm from './answerTemplates/YesNoForm';
import CheckBoxForm from './answerTemplates/CheckBoxForm';
import Box from '@material-ui/core/Box'

const backgroundStyle = {
  backgroundColor: '#33ccff'
}

const checkBox = 'checkBox'
const yesNo = 'yesNo'

class QuestionPage extends Component {
  constructor(props) {
    super(props)
    // const question = this.props.question
    // const choices = this.props.choices
    // this.state = {question, choices}
    this.state = {
      filter: {
        isStudent: null,
        isBusiness: null,
      },
      question: 'Who are you?',
      type: 'yesNo',
      choices: {
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
    switch (this.state.type) {
      case checkBox:
        return (
          <CheckBoxForm answers={this.state.choices.answers} />)
      case yesNo:
        return <YesNoForm />
      default:
        console.log("Error")
        throw "Not valid path."
    }
  }

  nextQuestion(answer) {
    // answer will be an array
    const type = this.state.type
    switch (type) {
      case checkBox:

      case yesNo:

      default:
        throw "Not valid path in next Questions."
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

