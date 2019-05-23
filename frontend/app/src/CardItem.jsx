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
//Currently has limited params
function CardItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.bank}
        </Typography>
        <Typography variant="h5" component="h2">
        {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          APR: {props.apr}%
          Fee: ${props.fee}
        </Typography>
        <Typography variant="body2" component="p">
        {props.description}
        </Typography>
      </CardContent>
      {/* Button would hyperlink to site */}
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;