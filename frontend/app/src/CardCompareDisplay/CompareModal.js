import React from 'react';
import PropTypes from '../../node_modules/prop-types';
import { withStyles } from '../../node_modules/@material-ui/core/styles';
import Typography from '../../node_modules/@material-ui/core/Typography';
import Modal from '../../node_modules/@material-ui/core/Modal';
import Button from '../../node_modules/@material-ui/core/Button';
import Slide from '../../node_modules/@material-ui/core/Slide';
import CardGrid from './CardGrid';

const file = [
  {
    "typeOfCard": "Discover It Student Cash Back",
    "company": "Discover",
    "standardAPR": 19.74,
    "transferAPR": 10.99,
    "timeTransferAPR": 6,
    "purchaseAPR": 0,
    "timePurchaseAPR": 6,
    "introTransfer": 3,
    "standardTransfer": 5,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "TRUE",
    "rewardsDetails": "$20 statement credit for GPA >= 3.0 up to next 5 years. Cash back match at end of first year",
    "cashback": 3,
    "cashbackDetails": "5% at different places quarterly. 1% unlimited on all other purchases.",
    "creditHistory": "limited",
    "creditLimit": "500 or more",
    "studentCard": "TRUE",
    "travelCard": "FALSE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "typeOfCard": "Discover It Student Chrome",
    "company": "Discover",
    "standardAPR": 19.74,
    "transferAPR": 10.99,
    "timeTransferAPR": 6,
    "purchaseAPR": 0,
    "timePurchaseAPR": 6,
    "introTransfer": 3,
    "standardTransfer": 5,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "TRUE",
    "rewardsDetails": "$20 statement credit for GPA >= 3.0 up to next 5 years. Cash back match at end of first year.",
    "cashback": 1.5,
    "cashbackDetails": "2% at gas stations/restaurants up to 1000$ each quarter. 1% unlimited on all other purchases.",
    "creditHistory": "limited",
    "creditLimit": "500 or more",
    "studentCard": "TRUE",
    "travelCard": "FALSE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "typeOfCard": "Journey Student Rewards from Capital One",
    "company": "Capital One",
    "standardAPR": 26.99,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 0,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "FALSE",
    "rewardsDetails": "NULL",
    "cashback": 1.25,
    "cashbackDetails": "1% all. 1.25% if paying on time",
    "creditHistory": "limited",
    "creditLimit": "500 or more",
    "studentCard": "TRUE",
    "travelCard": "FALSE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "typeOfCard": "Chase Sapphire",
    "company": "Chase",
    "standardAPR": 21.74,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 5,
    "lateFee": 39,
    "annualFee": 95,
    "rewards": "TRUE",
    "rewardsDetails": "redeem points for miles, hotels, cash",
    "cashback": 0,
    "cashbackDetails": "NULL",
    "creditHistory": "Good",
    "creditLimit": "5000 or more",
    "studentCard": "FALSE",
    "travelCard": "TRUE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "typeOfCard": "Capital One Venture Rewards",
    "company": "Capital One",
    "standardAPR": 21.615,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 0,
    "lateFee": 38,
    "annualFee": 95,
    "rewards": "TRUE",
    "rewardsDetails": "Earn miles on purchases",
    "cashback": 0,
    "cashbackDetails": "NULL",
    "creditHistory": "Good",
    "creditLimit": "5000 or more",
    "studentCard": "FALSE",
    "travelCard": "TRUE",
    "securedCard": "FALSE",
    "securityDeposit": "NULL"
  },
  {
    "typeOfCard": "Capital One Secured Mastercard",
    "company": "Capital One",
    "standardAPR": 26.99,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 0,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "FALSE",
    "rewardsDetails": "NULL",
    "cashback": 0,
    "cashbackDetails": "NULL",
    "creditHistory": "limited",
    "creditLimit": 200,
    "studentCard": "FALSE",
    "travelCard": "FALSE",
    "securedCard": "TRUE",
    "securityDeposit": 200
  },
  {
    "typeOfCard": "Discover It Secured",
    "company": "Discover",
    "standardAPR": 25.24,
    "transferAPR": 0,
    "timeTransferAPR": 0,
    "purchaseAPR": 0,
    "timePurchaseAPR": 0,
    "introTransfer": 0,
    "standardTransfer": 0,
    "lateFee": 39,
    "annualFee": 0,
    "rewards": "FALSE",
    "rewardsDetails": "NULL",
    "cashback": 1.5,
    "cashbackDetails": "2% gas/restaurants up to $1000 purchases quarterly. 1% on everything else",
    "creditHistory": "limited",
    "creditLimit": 200,
    "studentCard": "FALSE",
    "travelCard": "FALSE",
    "securedCard": "TRUE",
    "securityDeposit": 200
  }
];

function getModalStyle() {
  const top = 5;
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
  //var results = JSON.parse(file);
  var cardList = [];
  for (let i = 0; i < file.length; i++) {
    let card = file[i];
    console.log(card);
    console.log(cards);
    if (cards.includes(card.company)) {
      cardList.push(card);
    }
  }
  return cardList;
}



const cardList = [{name: "Discover", type: "Discover It Student Chrome", stud: false, trav: true, rewards: true, annFee: 9, cash: 20}, 
{name: "Discover", type: "Discover It Student Chrome", stud: false, trav: false, rewards: true, annFee: 9, cash: 20}, 
{name: "Discover", type: "Discover It Student Chrome", stud: false, trav: true, rewards: true, annFee: 9, cash: 20}];



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

  cardList = getCardList(this.props.starredCards);

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
