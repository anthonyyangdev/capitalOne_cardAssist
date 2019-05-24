import React, { Component } from 'react'
import Button from '@material-ui/core/Button'


const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class WantAPRRange extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>APR</h1>
  }

  renderQuestion() {
    return <p>Are you looking for a particular APR? Many cards actually have a range of variable APRs. Paying less interest on your monthly payments is obviously better,
     but depending on how specific the rest of your criteria is, this might narrow your results by quite a lot.</p>
  }

  renderChoice() {
    return <div>
      <Button onClick={() => this.props.next({ aprRange: 30 }, 13)}>
        Less than 30%</Button> <br />
      <Button onClick={() => this.props.next({ aprRange: 25 }, 13)}>
        Less than 25%</Button> <br />
      <Button onClick={() => this.props.next({ aprRange: 20 }, 13)}>
        Less than 20%</Button> <br />
      <Button onClick={() => this.props.next({ aprRange: 15 }, 13)}>
        Any</Button>
    </div>
  }

  renderAnswerTemplate() {
    return this.renderChoice()
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

export default WantAPRRange
