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
import BankListings from '../Results/BankListing'

const creditCards = [
  {
    "link": 'https://www.discover.com/credit-cards/student/it-card.html',
    "typeOfCard": "Discover It Student Cash Back",
    "company": "Discover",
    "standardAPR": 19.74,
    "transferAPR": 10.99,
    "timeTransferAPR": 6,
    "purchaseAPR": 0,
    "timePurchaseAPR": 6,
    "introTransfer": 3,
    "standardTransfer": 5,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "TRUE",
    "rewardsDetails": "$20 statement credit for GPA >= 3.0 up to next 5 years. Cash back match at end of first year",
    "cashback": 3,
    "cashbackDetails": "5% at different places quarterly. 1% unlimited on all other purchases.",
    "creditHistory": "limited",
    "creditLimit": "500 or more",
    "studentCard": "TRUE",
    "travelCard": "FALSE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "link": 'https://www.discover.com/credit-cards/student/chrome-card.html',
    "typeOfCard": "Discover It Student Chrome",
    "company": "Discover",
    "standardAPR": 19.74,
    "transferAPR": 10.99,
    "timeTransferAPR": 6,
    "purchaseAPR": 0,
    "timePurchaseAPR": 6,
    "introTransfer": 3,
    "standardTransfer": 5,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "TRUE",
    "rewardsDetails": "$20 statement credit for GPA >= 3.0 up to next 5 years. Cash back match at end of first year.",
    "cashback": 1.5,
    "cashbackDetails": "2% at gas stations/restaurants up to 1000$ each quarter. 1% unlimited on all other purchases.",
    "creditHistory": "limited",
    "creditLimit": "500 or more",
    "studentCard": "TRUE",
    "travelCard": "FALSE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "link": 'https://www.capitalone.com/credit-cards/journey-student/',
    "typeOfCard": "Journey Student Rewards from Capital One",
    "company": "Capital One",
    "standardAPR": 26.99,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 0,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "FALSE",
    "rewardsDetails": "NULL",
    "cashback": 1.25,
    "cashbackDetails": "1% all. 1.25% if paying on time",
    "creditHistory": "limited",
    "creditLimit": "500 or more",
    "studentCard": "TRUE",
    "travelCard": "FALSE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "link": 'https://creditcards.chase.com/sapphire-credit-cards',
    "typeOfCard": "Chase Sapphire",
    "company": "Chase",
    "standardAPR": 21.74,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 5,
    "lateFee": 39,
    "annualFee": 95,
    "rewards": "TRUE",
    "rewardsDetails": "redeem points for miles, hotels, cash",
    "cashback": 0,
    "cashbackDetails": "NULL",
    "creditHistory": "Good",
    "creditLimit": "5000 or more",
    "studentCard": "FALSE",
    "travelCard": "TRUE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "link": "https://www.capitalone.com/credit-cards/venture/",
    "typeOfCard": "Capital One Venture Rewards",
    "company": "Capital One",
    "standardAPR": 21.615,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 0,
    "lateFee": 38,
    "annualFee": 95,
    "rewards": "TRUE",
    "rewardsDetails": "Earn miles on purchases",
    "cashback": 0,
    "cashbackDetails": "NULL",
    "creditHistory": "Good",
    "creditLimit": "5000 or more",
    "studentCard": "FALSE",
    "travelCard": "TRUE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "link": "https://www.capitalone.com/credit-cards/secured-mastercard/",
    "typeOfCard": "Capital One Secured Mastercard",
    "company": "Capital One",
    "standardAPR": 26.99,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 0,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "FALSE",
    "rewardsDetails": "NULL",
    "cashback": 0,
    "cashbackDetails": "NULL",
    "creditHistory": "limited",
    "creditLimit": 200,
    "studentCard": "FALSE",
    "travelCard": "FALSE",
    "securedCard": "TRUE",
    "securityDeposit": 200
  },
  {
    "link": "https://www.discover.com/credit-cards/secured/",
    "typeOfCard": "Discover It Secured",
    "company": "Discover",
    "standardAPR": 25.24,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 0,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "FALSE",
    "rewardsDetails": "NULL",
    "cashback": 1.5,
    "cashbackDetails": "2% gas/restaurants up to $1000 purchases quarterly. 1% on everything else",
    "creditHistory": "limited",
    "creditLimit": 200,
    "studentCard": "FALSE",
    "travelCard": "FALSE",
    "securedCard": "TRUE",
    "securityDeposit": 200
  }
]

class QuestionPage extends Component {
  constructor(props) {
    super(props)
    this.obtainCards = this.obtainCards.bind(this)
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

  obtainCards() {
    const filters = this.state.filter
    var cards = creditCards

    if (filters.wantSecured) {
      cards = cards.filter(e => e.securedCard === "TRUE")
    } else {
      cards = cards.filter(e => e.securedCard === "FALSE")
    }

    if (filters.wantStudentCard) {
      cards = cards.filter(e => e.studentCard === "TRUE")
    } else {
      cards = cards.filter(e => e.securedCard === "FALSE")
    }

    if (filters.wantAnnualFee) {
      cards = cards.filter(e => e.annualFee !== 0)
    } else {
      cards = cards.filter(e => e.annualFee === 0)
    }

    if (filters.wantCashBack) {
      cards = cards.filter(e => e.rewards === "TRUE")
    } else {
      cards = cards.filter(e => e.rewards === "FALSE")
    }

    return cards

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
      case 13:
        const cards = this.obtainCards()
        console.log("Cards obtained", cards)
        return <BankListings data={cards} />
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

