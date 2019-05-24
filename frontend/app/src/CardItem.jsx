import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import card1 from './resources/capital-one-secured.png';
import card2 from './resources/discover-it-secured.png';
import card3 from './resources/capital-one-venture.png';
import card4 from './resources/chase-saaphire.png';
import card5 from './resources/journey-student-rewards.png';
import card6 from './resources/discover-it-student-cashback.png';
import card7 from './resources/discover-it-student-chrome.png';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12
  },
});
//Currently has limited params
function CardItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.bank.typeOfCard}
        </Typography>
        {props.bank["typeOfCard"] === "Discover It Secured" ? <img style={{width: '250px', height: '140px',padding: 0}} src={card1} /> : ""}
            {props.bank["typeOfCard"] === "Capital One Secured Mastercard" ? <img style={{width: '250px', height: '140px',padding: 0}} src={card2}/> : ""}
            {props.bank["typeOfCard"] === "Capital One Venture Rewards" ? <img style={{width: '250px', height: '140px',padding: 0}}  src={card3}/> : ""}
            {props.bank["typeOfCard"] === "Chase Saaphire" ? <img style={{width: '250px', height: '140px',padding: 0}} src={card4}/> : ""}
            {props.bank["typeOfCard"] === "Journey Student Rewards from Capital One" ? <img style={{width: '250px', height: '140px',padding: 0}}  src={card5}/> : ""}
            {props.bank["typeOfCard"] === "Discover It Student Cash Back" ? <img style={{width: '250px', height: '140px',padding: 0}} src={card6} /> : ""}
            {props.bank["typeOfCard"] === "Discover It Student Chrome" ? <img style={{width: '250px', height: '140px',padding: 0}}  src={card7}/> : ""}
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.bank.company}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <p>APR: {props.bank.standardAPR}%</p>
          <p>Annual Fee: ${props.bank.annualFee}</p>
          <p>Late Fee: ${props.bank.lateFee}</p>
        </Typography>
        <Typography variant="body2" component="p">
          <p>{props.bank.cashBackDetails}</p>
          <p>Good for Students: {props.bank.studentCard ? "Yes" : "No"}</p>
          <p>Gives Travel Rewards: {props.bank.travelCard ? "Yes" : "No"}</p>
          <p>Secured Card: {props.bank.securedCard ? "Yes" : "No"}</p>
        </Typography>
      </CardContent>
      {/* Button would hyperlink to site */}
      <CardActions>
        <Button
          size="small"
          onClick={() => window.open(props.bank.link, "_blank")}>
          Learn More
          </Button>
      </CardActions>
      {/* <CardContent>
        {props.checkBox} Check to Compare
      </CardContent> */}
    </Card>
  );
}

export default CardItem;