import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WantBalanceTransfer extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Balance Transfers</h1>
  }

  renderQuestion() {
    return <p>Are you looking to make a balance transfer to a new card?
    Certain cards may or may not charge a small fee to do so (such as 3% of the balance to be transferred).
    Your card issuer might offer a lower APR on your transferred balance for a certain period of time
    (known as an intro transfer APR)</p>
  }

  renderAnswerTemplate() {
    return (
      <div>
        <Button onClick={() => this.props.next({}, 10)}>
          Yes
      </Button> <br />
        <Button onClick={() => this.props.next({}, 8)}>
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

export default WantBalanceTransfer
