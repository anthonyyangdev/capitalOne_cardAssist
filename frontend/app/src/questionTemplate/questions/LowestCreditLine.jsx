import React, { Component } from 'react'
import QuestionPage from '../QuestionPage'
import YesNoForm from '../answerTemplates/YesNoForm';
import CheckBoxForm from '../answerTemplates/CheckBoxForm';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'


const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class LowestCreditLine extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Credit Line</h1>
  }

  renderQuestion() {
    return <p>What is the lowest credit line that you want?</p>
  }

  renderChoice() {
    return (
      <div>
        <Button onClick={() => this.props.next({}, 7)}>
          At least $200</Button> <br />
        <Button onClick={() => this.props.next({}, 7)}>
          At least $500</Button> <br />
        <Button onClick={() => this.props.next({}, 7)}>
          At least $1000</Button> <br />
        <Button onClick={() => this.props.next({}, 7)}>
          At least $5000</Button> <br />
      </div>
    )
  }

  renderAnswerTemplate() {
    return this.renderChoice()
  }

  render() {
    return (
      <div style={backgroundStyle}>
        {/* Place your question in here */}
        {this.renderHeader()}
        {this.renderQuestion()}
        {this.renderAnswerTemplate()}
      </div>
    )
  }
}

export default LowestCreditLine