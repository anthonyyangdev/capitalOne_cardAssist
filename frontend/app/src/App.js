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
import CardItem from './CardItem'
import TestDatabaseCall from './TestDatabaseCall'
import firebase from 'firebase'

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
      <TestDatabaseCall></TestDatabaseCall>
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

// function App() {
//   return (
//
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//
//         </a>
//
//       </header>
//       <TestDatabaseCall></TestDatabaseCall>
//       <CardItem bank = "Capital One" fee = "0" apr = "0"></CardItem>
//       <div>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="title" color="inherit">
//               React &amp; Material-UI Sample Application
//                 </Typography>
//           </Toolbar>
//           <Button>Hello World</Button>
//         </AppBar>
//       </div>
//     </div>
//   );
// }

export default App;
