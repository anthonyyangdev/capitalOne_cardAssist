import React, { Component } from 'react'
import CardItem from '../CardItem'
import Button from '@material-ui/core/Button'
import CompareModal from '../CardCompareDisplay/CompareModal';

const fallback = [
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
  }, {
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
    this.updateValue = this.updateValue.bind(this)
    var data
    if (this.props.data.length === 0) {
      data = fallback
    } else {
      data = this.props.data
    }

    var selected = []
    for (const i in data) {
      selected.push(false)
    }

    this.state = { data, selected }

  }

  updateValue(e) {
    const value = e.target.value
    var newSelected = this.state.selected
    newSelected[value] = !newSelected[value]
    this.setState({ selected: newSelected })
  }

  renderEachCard() {
    var row = []
    var data = this.state.data;
    for (var i = 0; i < data.length; i++) {
      const checkBox = <input type="checkbox" value={i}
        checked={this.state.selected[i]}
        onChange={e => this.updateValue(e)}
      />
      row.push(
        <div>
          <CardItem bank={data[i]} checkBox={checkBox} />
        </div>
      )
    }
    return row
  }

  render() {
    // var data = []
    // console.log("Selected", this.state.selected)
    // for (const i in this.state.data) {
    //   if (this.state.selected[parseInt(i)]) {
    //     console.log("There")
    //     data.push(this.state.data[parseInt(i)].typeOfCard)
    //   }
    // }
    return (
      <div>
        <CompareModal starredCards={this.state.data.map(e => e.typeOfCard)} />
        {this.renderEachCard()}
      </div>
    )
  }

}

export default BankListing