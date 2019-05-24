import React, { Component } from 'react'
import CardItem from '../CardItem'

class BankListing extends Component {
  constructor(props) {
    super(props)
    this.renderEachCard = this.renderEachCard.bind(this)
  }

  renderEachCard() {
    var row = []
    // var data=fs.readFileSync('creditCards.json', 'utf8');
    var data=this.props.data;
    for (var i = 0; i<data.length; i++) {
      
      row.push(
        <CardItem bank={data[i].company} />
      )
    }

    return row
  }

  render() {
    return this.renderEachCard()
  }

}

export default BankListing