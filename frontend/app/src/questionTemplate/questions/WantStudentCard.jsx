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
    return <p>Student credit cards exist to allow students with little to no credit history to begin building their credit early.
    They often provide benefits particularly useful to students such as no annual fees, low interest rates,
    or even rewards for good grades. The assumption of limited credit history means these cards are easier to be approved for,
    but it also means the credit limits are typically lower. Are you interested in a card like this?</p>
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
