import React, { Component } from 'react'
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
    return <h1>Credit Limit</h1>
  }

  renderQuestion() {
    return <p>When you're approved for a card, you'll start with the minimum credit limit that may vary depending on your credit-trustworthiness. You can usually increase your credit line by making payments on time and thus proving trustworthiness to your card issuer. While you may not need a large line of credit, it is often ideal to have a high credit limit because low credit utilization helps raise your credit score. Student and secured cards will often have smaller amounts. Is there a minimum credit limit you would like?</p>
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
        <Button onClick={() => this.props.next({}, 7)}>
          Don't care</Button>
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
