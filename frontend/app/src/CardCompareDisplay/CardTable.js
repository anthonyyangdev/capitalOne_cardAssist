import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Table from './node_modules/@material-ui/core/Table';
import TableBody from './node_modules/@material-ui/core/TableBody';
import TableCell from './node_modules/@material-ui/core/TableCell';
import TableHead from './node_modules/@material-ui/core/TableHead';
import TableRow from './node_modules/@material-ui/core/TableRow';
import Paper from './node_modules/@material-ui/core/Paper';
import { NavigationMenu } from 'material-ui/svg-icons';

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
  //const cardArr = Object.values(cardObj);
  const cardArr = Object.values(props.cardObj);
  const cardObject = props.cardObj;
  var checkmark = '✔';
  var xmark = '✗';
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>{cardArr.shift()}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {cardArr.map((cardFeature) => (
              <TableRow key={cardFeature}>
                <TableCell component="th" scope="row">
                  {typeof(cardFeature) !== 'boolean' ? cardFeature.toString() : (cardFeature ? checkmark : xmark)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </Paper>
  );
}

export default CardTable;
