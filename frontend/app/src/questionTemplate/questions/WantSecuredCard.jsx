import React, { Component } from 'react'
import QuestionPage from '../QuestionPage'
import YesNoForm from '../answerTemplates/YesNoForm';
import CheckBoxForm from '../answerTemplates/CheckBoxForm';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WantSecuredCard extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Secured Credit Card</h1>
  }

  renderQuestion() {
    return <p>For those with a credit history that is poor, limited, or non-existent,
    a secured card can be a good option to build or rebuild credit.
    They are often easy to be approved for, as the cards require a security deposit that reduces the issuer's risk
    in loaning you money. The amount you pay as a security deposit often acts as your credit limit so that the issuer
    can take an outstanding balance straight from the deposit if you fail to pay on time. However, if your goal is to build
    a good credit score, you might not want to miss those payments. Would you be interested in a secured credit card?</p>
  }

  renderAnswerTemplate() {
    return (
      <div>
        <Button onClick={() => this.props.next({ wantSecured: true }, 4)}>
          Yes
      </Button> <br />
        <Button onClick={() => this.props.next({ wantSecured: false }, 4)}>
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

export default WantSecuredCard
