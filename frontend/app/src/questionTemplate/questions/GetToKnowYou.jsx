import React, { Component } from 'react'
import Button from '@material-ui/core/Button'


const backgroundStyle = {
  padding: '30px',
  backgroundColor: '#33ccff',
  height: '500px'
}

class GetToKnowYou extends Component {
  constructor(props) {
    super(props)
    this.handleNextPage = this.handleNextPage.bind(this)
    this.updateValue = this.updateValue.bind(this)
    this.state = {
      answers: [
        'Student',
        'Business',
        'First-time card seeker',
        'Current/previous card holder (inluding joint card with parents)',
      ],
      select: [false, false, false, false]
    }
  }

  renderHeader() {
    return <h1>Let's Get to Know You</h1>
  }

  renderQuestion() {
    return <p>I am a...</p>
  }

  updateValue(e) {
    const value = e.target.value
    const e0 = this.state.select[0]
    const e1 = this.state.select[1]
    const e2 = this.state.select[2]
    const e3 = this.state.select[3]
    switch (value) {
      case "0":
        this.setState({ select: [true, false, e2, e3] })
        break
      case "1":
        this.setState({ select: [false, true, e2, e3] })
        break
      case "2":
        this.setState({ select: [e0, e1, true, false] })
        break
      case "3":
        this.setState({ select: [e0, e1, false, true] })
        break
      default:
        console.log("Went to default")
    }
  }

  renderChoice() {
    var row = []
    for (const choice in this.state.answers) {
      row.push(
        <div>
          <input type='checkbox' value={choice}
            checked={this.state.select[parseInt(choice)]}
            onChange={e => this.updateValue(e)} />
          {this.state.answers[choice]}
        </div>
      )
    }
    return row
  }

  renderAnswerTemplate() {
    return this.renderChoice()
  }

  handleNextPage() {
    var isStudent = this.state.select[0]
    var isBusiness = this.state.select[1]
    var hasCard = this.state.select[3]

    if ((!isStudent && !isBusiness) || (!hasCard) && (!this.state.select[2])) {
      alert("Please indicate whether or not you are a student and if this will be your first card.")
      return
    }
    
    this.props.next({ isStudent, isBusiness, hasCard }, 3)
  }

  renderNext() {
    return (
      <Button color='primary' onClick={() => this.handleNextPage()}>
        Continue
    </Button>
    )
  }

  render() {
    return (
      <div style={backgroundStyle}>
        {/* Place your question in here */}
        {this.renderHeader()}
        {this.renderQuestion()}
        {this.renderAnswerTemplate()}
        {this.renderNext()}
      </div>
    )
  }
}

export default GetToKnowYou