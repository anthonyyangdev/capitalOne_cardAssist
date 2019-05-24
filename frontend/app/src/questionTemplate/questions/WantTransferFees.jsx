import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WantTransferFees extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Transfer Fees</h1>
  }

  renderQuestion() {
    return <p>Are you okay with transfer fees?</p>
  }

  renderAnswerTemplate() {
    return (
      <div>
        <Button onClick={() => this.props.next({}, 8)}>
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

export default WantTransferFees