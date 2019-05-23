import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Home from './Home';

function TabContainer(props) {
  return (
    <Grid container direction="row" justify="center" >
      <Grid item xs={12}>{props.children}</Grid>
    </Grid>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="Get a Credit Card" />
          <Tab label="Learn" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><Home></Home></TabContainer>}
      {value === 1 && <TabContainer>Learn</TabContainer>}
      {value === 2 && <TabContainer>Get a Credit Card</TabContainer>}
    </div>
  );
}

export default NavBar;
