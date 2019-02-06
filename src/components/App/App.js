import React, { Component } from 'react';
import MovieNav from '../MovieNav/MovieNav';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <MovieNav />
      </div>
    );
  }
}

export default App;
