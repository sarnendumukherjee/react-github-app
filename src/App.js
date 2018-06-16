import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import SearchUser from './searchUser/SearchUser';
import UserDetail from './userDetail/UserDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SearchUser} />
          <Route path="/userDetail/:userName" component={UserDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
