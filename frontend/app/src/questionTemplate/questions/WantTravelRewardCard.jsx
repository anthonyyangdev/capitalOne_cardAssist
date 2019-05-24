import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WantTravelRewardCard extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Travel/Reward Card</h1>
  }

  renderQuestion() {
    return <p>Do you want a travel reward card?</p>
  }

  renderAnswerTemplate() {
    return (
      <div>
        <Button onClick={() => this.props.next({ wantTravelReward: true }, 4)}>
          Yes
      </Button> <br />
        <Button onClick={() => this.props.next({wantTravelReward: false}, 4)}>
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

export default WantTravelRewardCard