import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Capital One
        </Typography>
        <Typography variant="h5" component="h2">
        Secured Mastercard
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Annual fee: $0
        </Typography>
        <Typography variant="body2" component="p">
        Refundable deposit of $49, $99 or $200 gets you a $200 initial credit line. 
        Access a higher credit line by making your first 5 monthly payments on time.
        </Typography>
      </CardContent>
      // Button would hyperlink to site
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;