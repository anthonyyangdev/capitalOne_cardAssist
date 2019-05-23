import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase'

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
    marginBottom: 12,
  },
});

//Currently has sample data, would have apr, fee, bank etc as params
function CardItem() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  var ref = firebase.database().ref();
  var companyNames = "";

  ref.orderByChild("company").on("child_added", function(data) {
    companyNames += data.val().company + " ";
  });


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>

        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardItem;
