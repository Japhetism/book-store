import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/home'

export default class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={HomeScreen} />
          <Route path="/home" component={HomeScreen} />
        </Switch>
      </Router>
    );
  }
}