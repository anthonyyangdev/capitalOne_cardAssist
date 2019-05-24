import React, { Component } from 'react'
import CardItem from '../CardItem'

class BankListing extends Component {
  constructor(props) {
    super(props)
    this.renderEachCard = this.renderEachCard.bind(this)
  }

  renderEachCard() {
    var row = []

    for (const card in this.props.cards) {
      console.log("Card", card)
      row.push(
        <CardItem />
      )
    }

    return row
  }

  render() {
    return this.renderEachCard()
  }

}

export default BankListing