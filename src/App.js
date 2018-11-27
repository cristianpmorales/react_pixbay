import React, { Component } from 'react';
import NavBar from './componets/navBar/navBar'
import Search from './componets/search/search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar/>
          <Search/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
