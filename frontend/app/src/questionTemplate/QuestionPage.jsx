import React, { Component } from 'react';
import FirstQuestion from './questions/FirstQuestion';
import GetToKnowYou from './questions/GetToKnowYou';
import WantStudentCard from './questions/WantStudentCard';
import LowestCreditLine from './questions/LowestCreditLine'
import WantAnnualFees from './questions/WantAnnualFees'
import WantAPRRange from './questions/WantAPRRange'
import WantBalanceTransfer from './questions/WantBalanceTransfer'
import WantCashBackRewards from './questions/WantCashBackRewards'
import WantSecuredCard from './questions/WantSecuredCard'
import WantTransferFees from './questions/WantTransferFees'
import WantTravelRewardCard from './questions/WantTravelRewardCard'
import WhatIsMyCreditScore from './questions/WhatIsMyCreditScore'

const backgroundStyle = {
  backgroundColor: '#33ccff'
}

class QuestionPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: {
        isStudent: null,
        wantSecured: null,
        hasCard: null,
        wantStudentCard: null,
        creditScore: null,
        wantAnnualFee: null,
        aprRange: 100,
        wantCashBack: null,
        wantBalanceTransfer: null,
        wantTransferFee: null,
        wantTravelReward: null,

        // For future-proofing
        isBusiness: null,
      },
      page: 1
    }
    this.renderQuestion = this.renderQuestion.bind(this)
  }

  renderQuestion() {
    console.log("Filters", this.state)
    const func = (up, i) => this.nextQuestion(up, i)
    switch (this.state.page) {
      case 1: return <FirstQuestion next={func} />
      case 2: return <GetToKnowYou next={func} />
      case 3: return <WantStudentCard
        hasCard={this.state.filter.hasCard}
        next={func} />
      case 4: return <LowestCreditLine next={func} />
      case 5: return <WantAnnualFees next={func} />
      case 6: return <WantAPRRange next={func} />
      case 7: return <WantBalanceTransfer next={func} />
      case 8: return <WantCashBackRewards next={func} />
      case 9: return <WantSecuredCard next={func} />
      case 10: return <WantTransferFees next={func} />
      case 11: return <WantTravelRewardCard next={func} />
      case 12: return <WhatIsMyCreditScore next={func} />
      case 13: return <HasStudentCard next={func} />
      default: throw "Not the correct path."
    }
  }

  nextQuestion(updates, i) {
    console.log("Updates", updates)
    const newFilter = { ...this.state.filter, ...updates }
    this.setState({ filter: newFilter, page: i })
  }

  render() {
    return this.renderQuestion()
  }
}

export default QuestionPage

