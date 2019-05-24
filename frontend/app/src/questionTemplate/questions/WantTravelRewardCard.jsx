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
    return <h1>Travel & Rewards Card</h1>
  }

  renderQuestion() {
    return <p>If your credit score is high enough, you may qualify for cards that offer rewards points for purchases,
    which can often be redeemed for things like flights, hotels, restaurant food, and more. Others might offer high cash back
    rates at places you frequent such as grocery stores or gas stations. </p>
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
