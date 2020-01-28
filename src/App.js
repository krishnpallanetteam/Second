import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Main from './main';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home {...props} />
            )}></Route>
          </Switch>
        </div>
      </div >
    )
  }
}

export default (App);
