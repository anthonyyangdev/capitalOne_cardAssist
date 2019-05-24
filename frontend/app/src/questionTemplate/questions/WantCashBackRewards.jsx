import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WantCashBackRewards extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Cash Back</h1>
  }

  renderQuestion() {
    return <p>Do you require a card that offers cash back?
    Many cards offer a percentage of cash back either on any purchase or on purchases at specific types of businesses.
    Some cards, such as those that are more travel-focused, will not directly offer cash back, or at least not as much
    as the value of their travel rewards.</p>
  }

  renderAnswerTemplate() {
    return (
      <div>
        <Button onClick={() => this.props.next({ wantCashBack: true }, 5)}>
          Yes
      </Button> <br />
        <Button onClick={() => this.props.next({ wantCashBack: false }, 5)}>
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

export default WantCashBackRewards
