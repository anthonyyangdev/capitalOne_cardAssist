import React, { Component } from 'react'
import Button from '@material-ui/core/Button'


const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

var select = [false, false, false, false, false]

class GetToKnowYou extends Component {
  constructor(props) {
    super(props)
    this.handleNextPage = this.handleNextPage.bind(this)
    this.updateValue = this.updateValue.bind(this)
    this.state = {
      answers: [
        'Student',
        'Business',
        'First-time card seeker',
        'Current/previous card holder (inluding joint card with parents)',
        'None of the Above'
      ]
    }
  }

  renderHeader() {
    return <h1>Let's Get to Know You</h1>
  }

  renderQuestion() {
    return <p>I am a...</p>
  }

  updateValue(e) {
    const value = e.target.value
    switch (value) {
      case 0: 
        select[0] = true
        select[1] = false
      case 1:
        select[0] = false
        select[1] = true
      case 2: 
        select[3] = false
        select[2] = true
      case 3:
        select[3] = true
        select[2] = false
      case 4:
        select[0] = false
        select[1] = false
        select[2] = false
        select[3] = false
        select[4] = true
    }
  }

  renderChoice() {
    var row = []
    for (const choice in this.state.answers) {
      row.push(
        <div>
          <input type='checkbox' value={choice}
            onChange={e => this.updateValue(e)} />
          {this.state.answers[choice]}
        </div>
      )
    }
    return row
  }

  renderAnswerTemplate() {
    return this.renderChoice()
  }

  handleNextPage() {

    this.props.next({}, 3)
  }

  renderNext() {
    return (
      <Button color='primary' onClick={() => this.handleNextPage()}>
        Continue
    </Button>
    )
  }

  render() {
    return (
      <div style={backgroundStyle}>
        {/* Place your question in here */}
        {this.renderHeader()}
        {this.renderQuestion()}
        {this.renderAnswerTemplate()}
        {this.renderNext()}
      </div>
    )
  }
}

export default GetToKnowYou