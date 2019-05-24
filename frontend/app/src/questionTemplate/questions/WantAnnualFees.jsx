import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WantAnnualFees extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Annual Fees</h1>
  }

  renderQuestion() {
    return <p>Are you okay with annual fees in your credit card? While some credit cards require that you pay
    a fee each year to continue your use of the card, there are many that allow use with no annual fee.
    Paying no fee is ideal, of course, but credit cards with annual fees may offer more valuable benefits
    such as travel points (depending on what is most relevant to you).</p>
  }

  renderAnswerTemplate() {
    return (
      <div>
        <Button onClick={() => this.props.next({}, 6)}>
          Yes
      </Button> <br />
        <Button onClick={() => this.props.next({}, 6)}>
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

export default WantAnnualFees
