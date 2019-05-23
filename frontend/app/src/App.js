import React from 'react';
import logo from './logo.svg';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './App.css';
import CardItem from './CardItem'
import TestDatabaseCall from './TestDatabaseCall'
import QuestionPage from './questionTemplate/QuestionPage'
function App() {
  return (



    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>

      </header>
      <QuestionPage/>
      // <TestDatabaseCall></TestDatabaseCall>
      // <CardItem></CardItem>
      // <div>
      //   <AppBar position="static">
      //     <Toolbar>
      //       <Typography variant="title" color="inherit">
      //         React &amp; Material-UI Sample Application
      //           </Typography>
      //     </Toolbar>
      //     <Button>Hello World</Button>
      //   </AppBar>
      // </div>

    </div>
  );
}

export default App;
