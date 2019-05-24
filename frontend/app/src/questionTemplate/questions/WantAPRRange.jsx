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

class WantAPRRange extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>APR Range</h1>
  }

  renderQuestion() {
    return <p>What APR range are you looking for?</p>
  }

  renderChoice() {
    return <div>
      <Button onClick={() => this.props.next({}, 1)}>
        Less than 30%</Button> <br />
      <Button onClick={() => this.props.next({}, 1)}>
        Less than 25%</Button> <br />
      <Button onClick={() => this.props.next({}, 1)}>
        Less than 20%</Button> <br />
    </div>
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

export default WantAPRRange