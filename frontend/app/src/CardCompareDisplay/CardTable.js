import React from 'react';
import { makeStyles } from '../../node_modules/@material-ui/core/styles';
import Table from '../../node_modules/@material-ui/core/Table';
import TableBody from '../../node_modules/@material-ui/core/TableBody';
import TableCell from '../../node_modules/@material-ui/core/TableCell';
import TableHead from '../../node_modules/@material-ui/core/TableHead';
import TableRow from '../../node_modules/@material-ui/core/TableRow';
import Paper from '../../node_modules/@material-ui/core/Paper';


import card1 from '../resources/capital-one-secured.png';
import card2 from '../resources/discover-it-secured.png';
import card3 from '../resources/capital-one-venture.png';
import card4 from '../resources/chase-saaphire.png';
import card5 from '../resources/journey-student-rewards.png';
import card6 from '../resources/discover-it-student-cashback.png';
import card7 from '../resources/discover-it-student-chrome.png';





const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 250,
  },
}));


 const CardTable = props => {
  const classes = useStyles();
  const cardArr = Object.values(props.cardObj);
  const cardObj = props.cardObj;
  var checkmark = '✔';
  var xmark = '✗';
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell ><h2>{!cardObj["company"] ? "Company"  : cardObj["company"]}</h2>
            {!cardObj["company"] ? <div style={{height:'78px', width:'70px'}}/> : ""} 
            {cardObj["typeOfCard"] === "Discover It Secured" ? <img style={{width: '140px', height: '73px',padding: 0}} src={card1} /> : ""}
            {cardObj["typeOfCard"] === "Capital One Secured Mastercard" ? <img style={{width: '140px', height: '73px',padding: 0}} src={card2}/> : ""}
            {cardObj["typeOfCard"] === "Capital One Venture Rewards" ? <img style={{width: '140px', height: '73px',padding: 0}}  src={card3}/> : ""}
            {cardObj["typeOfCard"] === "Chase Saaphire" ? <img style={{width: '140px', height: '73px',padding: 0}} src={card4}/> : ""}
            {cardObj["typeOfCard"] === "Journey Student Rewards from Capital One" ? <img style={{width: '140px', height: '73px',padding: 0}}  src={card5}/> : ""}
            {cardObj["typeOfCard"] === "Discover It Student Cash Back" ? <img style={{width: '140px', height: '73px',padding: 0}} src={card6} /> : ""}
            {cardObj["typeOfCard"] === "Discover It Student Chrome" ? <img style={{width: '140px', height: '73px',padding: 0}}  src={card7}/> : ""}

            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {cardArr.includes("Card Type") ? cardArr.map((cardFeature) => (
              <TableRow key={cardFeature}>
                <TableCell style={{maxWidth: "2px"}}>
                  {cardFeature}
                </TableCell>
              </TableRow>
            )) : 
            <React.Fragment>
             <TableRow key={0} align="center">
                <TableCell component="th" scope="row">
                  {cardObj["typeOfCard"]}
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell component="th" scope="row">
                  ${cardObj["annualFee"]}
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell component="th" scope="row">
                  {cardObj["studentCard"] ? checkmark : xmark}
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell component="th" scope="row">
                  {cardObj["travelCard"] ? checkmark : xmark}
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell component="th" scope="row">
                  {cardObj["securedCard"] ? checkmark : xmark}
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell component="th" scope="row">
                  {cardObj["standardAPR"]}%
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell component="th" scope="row">
                  {cardObj["rewards"] ? checkmark : xmark}
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell component="th" scope="row">
                  {cardObj["rewardsDetails"] !== "NULL" ? cardObj["rewardsDetails"] : "N/A"}
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell component="th" scope="row">
                  {cardObj["cashback"]}%
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell component="th" scope="row">
                  {cardObj["cashbackDetails"] !== "NULL" ? cardObj["cashbackDetails"] : "N/A"}
                </TableCell>
              </TableRow>
            </React.Fragment>
            }
          </TableBody>
      </Table>
    </Paper>
  );
}

export default CardTable;
