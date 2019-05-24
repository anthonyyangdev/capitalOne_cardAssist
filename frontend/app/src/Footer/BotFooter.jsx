import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Popper from './Popper'


class BotFooter extends Component {

  constructor(props) {
    super(props)
    this.openBot = this.props.openBot
  }

  render() {
    return (
      <Box>
        <Popper></Popper>
      </Box>
    )
  }
}

export default BotFooter