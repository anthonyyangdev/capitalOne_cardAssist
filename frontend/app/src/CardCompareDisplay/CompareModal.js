import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import Typography from './node_modules/@material-ui/core/Typography';
import Modal from './node_modules/@material-ui/core/Modal';
import Button from './node_modules/@material-ui/core/Button';
import Slide from './node_modules/@material-ui/core/Slide';
import CardGrid from './CardGrid';

var fs = require('./node_modules/file-system');

function getModalStyle() {
  const top = 25;
  const left = 10;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit,
  },
});

const getCardList = (cards) => {
  var data = fs.readFileSync('creditCards.json', 'utf8');
  var results = JSON.parse(data);
  var cardList = [];
  for (const card in results) {
    if (cards.includes(card)) {
      cardList.push(card);
    }
  }
}

// const cardList = [{name: "Discover", type: "Discover It Student Chrome", stud: false, trav: true, rewards: true, annFee: 9, cash: 20}, 
// {name: "Discover", type: "Discover It Student Chrome", stud: false, trav: true, rewards: true, annFee: 9, cash: 20}, 
// {name: "Discover", type: "Discover It Student Chrome", stud: false, trav: true, rewards: true, annFee: 9, cash: 20}];


class CompareModal extends React.Component { // assume that get props containing the cards that were selected by user
  state = {
    open: false,
    checked: false,
  };

  handleOpen = () => {
    this.setState({
      open: true,
      checked: !this.state.checked
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //cardList = getCardList();

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom>Click to compare!</Typography>
        <Button onClick={this.handleOpen}>Open</Button>
          <Modal
            aria-labelledby="compare-modal"
            aria-describedby="compare-modal-description "
            open={this.state.open}
            onClose={this.handleClose}
            style={{alignItems:'center',justifyContent:'center'}}
          >
            <Slide direction="up" in={this.state.open} mountOnEnter unmountOnExit>
              <div style={getModalStyle()} className={classes.paper}>
                <CardGrid cards={this.cardList}></CardGrid>
              </div>
            </Slide>
          </Modal>
      </div>
    );
  }
}

CompareModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompareModal);
