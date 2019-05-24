import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WantStudentCard extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Student Credit Card</h1>
  }

  renderQuestion() {
    return
  }

  renderAnswerTemplate() {
    return (
      <div>
        <Button onClick={() => this.props.next({}, 9)}>
          Yes
      </Button> <br />
        <Button onClick={() => this.props.next({}, 9)}>
          No
      </Button>
      </div>
    )
  }

  renderNext() {
    return
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

export default WantStudentCard