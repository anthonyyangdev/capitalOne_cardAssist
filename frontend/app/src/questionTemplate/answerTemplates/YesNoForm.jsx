import React, { Component } from 'react';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

class YesNoForm extends Component {

  constructor(props) {
    super(props)
    //    const answers = this.props.answers
  }
  render() {
    return (<Box>
      <Button color="primary">
        Yes
      </Button>
      <Button color="secondary">
        No
      </Button>
    </Box>)
  }
}

export default YesNoForm