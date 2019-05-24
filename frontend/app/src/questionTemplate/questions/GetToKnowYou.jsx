import React, { Component } from 'react'
import Button from '@material-ui/core/Button'


const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class GetToKnowYou extends Component {
  constructor(props) {
    super(props)
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

  renderChoice() {
    var row = []
    for (const choice in this.state.answers) {
      row.push(
        <div>
          <input type='checkbox' value={choice} />
          {this.state.answers[choice]}
        </div>
      )
    }
    return row
  }

  renderAnswerTemplate() {
    return this.renderChoice()
  }

  renderNext() {
    return (
      <Button color='primary' onClick={() => this.props.next({}, 3)}>
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