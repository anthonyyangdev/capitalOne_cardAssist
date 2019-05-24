import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'

class CheckBoxForm extends Component {

  constructor(props) {
    super(props)
    const answers = this.props.answers
    this.state = { answers }
    this.renderChoice = this.renderChoice.bind(this)
  }

  renderChoice() {
    var row = []
    for (const choice in this.state.answers) {
      row.push(
        <div>
          <input type='checkbox' value={choice} />
          {this.state.answers[choice].answer}
        </div>
      )
    }
    row.push(
      <Button color='primary'>
        Continue
      </Button>)
    return row
  }

  render() {
    return (
      <Box>
        {this.renderChoice()}
      </Box>
    )
  }
}

export default CheckBoxForm