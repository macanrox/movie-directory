import React, { Component } from 'react';
import MovieNav from '../MovieNav/MovieNav';
import MovieFooter from '../MovieFooter/MovieFooter';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <MovieNav />
        <MovieFooter />
      </div>
    );
  }
}

export default App;
