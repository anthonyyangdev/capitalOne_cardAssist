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
    const question = this.props.question
    const choices = this.props.choices
    this.state = { question, choices }
    this.renderQuestion = this.renderQuestion.bind(this)
    this.renderAnswerTemplate = this.renderAnswerTemplate.bind(this)
  }

  renderQuestion() {
    return (
      <Box>
        <p>{this.state.question}</p>
      </Box>
    )
  }

  renderAnswerTemplate() {
    switch (this.state.choices.type) {
      case 'checkBox':
        return <CheckBoxForm></CheckBoxForm>
      case 'yesNo':
        return <YesNoForm></YesNoForm>
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

