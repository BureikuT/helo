import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav'
import routes from './routes'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Nav/>
        {routes}
        </div>
    );
  }
}

export default App;
