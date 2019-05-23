import React, { Component } from 'react';
import logo from './logo.svg';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './App.css';
import QuestionPage from './questionTemplate/QuestionPage'
import FirstQuestion from './questionTemplate/questions/FirstQuestion'
import YesNoForm from './questionTemplate/answerTemplates/YesNoForm'
import BotFooter from './Footer/BotFooter'
import NavBar from './NavBar'

class App extends Component {

  constructor(props) {
    super(props)
    this.openBot = this.openBot.bind(this)
  }

  openBot() {
    console.log("Opening the Bot")
  }

  render() {
    return (
      <grid className='App'>
        <NavBar style={{ gridArea: 'header' }} />
        {/* <p style={{ gridArea: 'header' }}>Header</p> */}
        {/* <FirstQuestion style={{
          gridArea: 'main'
        }} /> */}
        <BotFooter style={{ gridArea: 'footer' }}
          openBot={() => this.openBot()} />
      </grid >
    );
  }
}

export default App;
