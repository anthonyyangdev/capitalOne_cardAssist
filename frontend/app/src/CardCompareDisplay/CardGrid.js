import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import Grid from './node_modules/@material-ui/core/Grid';
import CardTable from './CardTable'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
});

class CardGrid extends React.Component {
  state = {
    spacing: '2',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const features = {company: "Company", type: "Type of Card", stud: "Student card", trav: "Travel card", 
    rewards: "Rewards card", annFee: "Annual fee", cash: "Cash back" };

    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" direction="row"
          style={{alignItems:'center',justifyContent:'center'}}
          >
            {
              <Grid item>
                <CardTable cardObj={features}></CardTable>
            </Grid>
            }
            {this.props.cards.map(obj => (
              <Grid key={obj} item>
                <CardTable cardObj={obj}></CardTable>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardGrid);
