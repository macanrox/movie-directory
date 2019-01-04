import React, { Component } from 'react';
import logo from './logo.svg';
import { Alert } from 'reactstrap';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Reactstrap Component */}
          <Alert color="primary">This is a primary alert — check it out!</Alert>
          {/* /Reactstrap Component */}
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
      </div>
    );
  }
}

export default App;
