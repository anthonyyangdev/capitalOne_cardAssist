import React, { Component } from 'react'
import Button from '@material-ui/core/Button'


const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WhatIsMyCreditScore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [
        'Excellent',
        'Good',
        'Ok',
        'Bad'
      ]
    }
  }

  renderHeader() {
    return <h1>Credit Score</h1>
  }

  renderQuestion() {
    return <p>How is your current credit score?</p>
  }

  renderChoice() {
    return <div>
      <Button onClick={() => this.props.next({ creditScore: "Excellent" }, 11)}>
        Excellent</Button> <br />
      <Button onClick={() => this.props.next({ creditScore: "Good" }, 11)}>
        Good</Button> <br />
      <Button onClick={() => this.props.next({ creditScore: "Fair" }, 11)}>
        Fair</Button> <br />
      <Button onClick={() => this.props.next({ creditScore: "Poor" }, 9)}>
        Poor</Button> <br />
    </div>
  }


  renderAnswerTemplate() {
    return this.renderChoice()
  }

  render() {
    return (
      <div style={backgroundStyle}>
        {this.renderHeader()}
        {this.renderQuestion()}
        {this.renderAnswerTemplate()}
      </div>
    )
  }
}

export default WhatIsMyCreditScore