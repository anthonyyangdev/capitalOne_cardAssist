import React, { Component } from 'react';
import YesNoForm from './answerTemplates/YesNoForm';
import CheckBoxForm from './answerTemplates/CheckBoxForm';
import Box from '@material-ui/core/Box'
import FirstQuestion from './questions/FirstQuestion';
import GetToKnowYou from './questions/GetToKnowYou';
import HasStudentCard from './questions/HasStudentCard';

const backgroundStyle = {
  backgroundColor: '#33ccff'
}

class QuestionPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: {
        isStudent: null,
        isSecured: null,
        creditScore: 0,
        annualFee: null,
        aprRange: 1.0,
        cashBack: null,
        balanceTransfer: null,
        transferFee: null,

        // For future-proofing
        isBusiness: null,
      },
      page: 1
    }
    this.renderQuestion = this.renderQuestion.bind(this)
  }

  renderQuestion() {
    switch (this.state.page) {
      case 1: return <FirstQuestion next={(up, i) => this.nextQuestion(up, i)} />
      case 2: return <GetToKnowYou next={(up, i) => this.nextQuestion(up, i)} />
      case 3: return <HasStudentCard next={(up, i) => this.nextQuestion(up, i)} />
      
      default: throw "No room"
    }
  }

  nextQuestion(updates, i) {
    console.log("Going to next question", i)
    this.setState({ ...updates, page: i })
  }

  render() {
    return (
      <div style={backgroundStyle}>
        {this.renderQuestion()}
      </div>
    )
  }
}

export default QuestionPage

