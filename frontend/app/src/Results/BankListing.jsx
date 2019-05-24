import React, { Component } from 'react'
import CardItem from '../CardItem'


const fallback = [{
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
}]

class BankListing extends Component {
  constructor(props) {
    super(props)
    this.renderEachCard = this.renderEachCard.bind(this)
    // var selected = []
    // for (const i in this.props.data) {
    //   selected.push(false)
    // }
    // this.state = { selected }
  }

  renderEachCard() {
    var row = []
    var data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      row.push(<CardItem bank={data[i]} />)
    }
    if (row.length === 0) {
      row.push(<CardItem bank={data[0]} />)
      row.push(<CardItem bank={data[1]} />)
    }
    return row
  }

  render() {
    return this.renderEachCard()
  }

}

export default BankListing