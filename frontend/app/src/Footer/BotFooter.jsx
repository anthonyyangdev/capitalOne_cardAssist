import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

class BotFooter extends Component {

  constructor(props) {
    super(props)
    this.openBot = this.props.openBot
  }

  render() {
    return (
      <Box>
        <Button onClick={this.openBot}>
          Open Bot
        </Button>
      </Box>
    )
  }
}

export default BotFooter