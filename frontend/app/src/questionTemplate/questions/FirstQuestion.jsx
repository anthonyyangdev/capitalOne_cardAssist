import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class FirstQuestion extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return <h1>Product Name</h1>
  }

  renderQuestion() {
    return
  }

  renderAnswerTemplate() {
    return (
      <div>
        <Button onClick={() => this.props.next({}, 2)}>
          I want to Learn about Credit Cards
      </Button> <br />
        <Button onClick={() => this.props.next({}, 2)}>
          I want to Browse Credit Cards
      </Button>
      </div>
    )
  }

  renderNext() {
    return
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

export default FirstQuestion