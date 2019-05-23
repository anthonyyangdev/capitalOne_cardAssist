import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

class CheckBoxForm extends Component {

  constructor(props) {
    super(props)
    const answers = this.props.answers
    this.state = { answers }
    this.renderChoice = this.renderChoice.bind(this)
  }

  renderChoice(choice) {
    return <p>Answer Choice</p>
  }

  render() {
    return (
      <Box>
        {this.state.answers.map(choice => this.renderChoice)}
      </Box>
    )
  }
}

export default CheckBoxForm