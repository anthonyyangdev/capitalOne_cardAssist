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
    return <h1>Balance Transfer Fees</h1>
  }

  renderQuestion() {
    return <p>Are you looking to make balance transfer fees?</p>
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