import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieNav from '../MovieNav/MovieNav';
import Home from '../Home/Home';
import Credits from '../Credits/Credits';
import MovieFooter from '../MovieFooter/MovieFooter';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <MovieNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/credits" component={Credits} />
          </Switch>
          <MovieFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
