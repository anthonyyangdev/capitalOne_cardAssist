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
    return <p>Are you looking to make a balance transfer to a new card? This will often involve a balance transfer fee.
    Many cards will offer a lower APR on your transferred balance for a certain period of time
    (known as an intro transfer APR). If this is your first credit card,
    it's likely you do not need to worry about balance transfers.</p>
    //Change "if first credit card" to "since first credit card" once we have the data
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
