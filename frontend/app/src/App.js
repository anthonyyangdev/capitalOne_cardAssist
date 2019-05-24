import React, { Component } from 'react';
import './App.css';
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
