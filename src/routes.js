import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './containers/App';

export default class extends Component {
  state = {}
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}