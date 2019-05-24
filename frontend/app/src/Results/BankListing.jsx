import React, { Component } from 'react'
import CardItem from '../CardItem'

class BankListing extends Component {
  constructor(props) {
    super(props)
    this.renderEachCard = this.renderEachCard.bind(this)
  }

  renderEachCard() {
    var data=fs.readFileSync('creditCards.json', 'utf8');
    var results = JSON.parse(data);
    for (const card in results) {
      console.log("Card", card)
      row.push(
        <CardItem bank = {card.company} />
      )
    }

    return row
  }

  render() {
    return this.renderEachCard()
  }

}

export default BankListing