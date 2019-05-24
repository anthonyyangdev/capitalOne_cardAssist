import React, { Component } from 'react'
import capOne from '../resources/cap_one.png'
import creditCards from '../resources/major_creditCards.png'

const backgroundStyle = {
  backgroundColor: '#1ab2ff',
  padding: '30px'
}

class HomePage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={backgroundStyle}>
        <h1>Let's find your perfect credit card!</h1>
        <img
          style={{
            width: '60%'
          }}
          src={creditCards} />
        <br />
        <br />
        <br />
        <img
          style={{
            width: '20%'
          }}
          src={capOne} />
        <h3>Brought to you by the SES Hackathon!</h3>
      </div>
    )
  }
}

export default HomePage