import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: 500,
  },
});

class PositionedPopper extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    placement: null,
  };

  handleClick = placement => event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: state.placement !== placement || !state.open,
      placement,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open, placement } = this.state;

    return (
      <div className={classes.root}>
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
              <iframe 
      allow="microphone;"
      width="350"
      height="430"
      src="https://console.dialogflow.com/api-client/demo/embedded/519ad794-a372-40f1-816e-46583c1c7111">
  </iframe>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Button onClick={this.handleClick('top-start')}> Confused? I'm here to help!</Button>
      </div>
    );
  }
}

PositionedPopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedPopper);
