import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import QuestionPage from './questionTemplate/QuestionPage'
import HomePage from './Home/HomePage'
// import Home from './Home';

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
          <Tab label="Learn" />
          <Tab label="Get a Credit Card" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>
        <HomePage />
      </TabContainer>}
      {value === 1 &&
        <TabContainer>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <div style={{ width: '54%', height: '50%', padding: '100px' }}>
            <h2>We know that nobody understands those weird and complicated terms anyway.</h2>
              <br></br>APR? Transfer Fees? <br></br>
              It seems like banks are just trying to CONFUSE you. 
              <br></br>We aren't like that. We've partnered with Capital One to educate you on the most important 
                information. <br></br>
              Go ahead. Try the bot below and start learning today.
              
          </div>
        </Grid>
        </TabContainer>}
        {value === 2 &&
        <TabContainer>
          <QuestionPage />
        </TabContainer>}
    </div>
          );
        }
        
        export default NavBar;
