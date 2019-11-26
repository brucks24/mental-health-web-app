import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginComponent from './containers/login'
import {SignUpStudent, SignUpCoach } from './containers/signup'

function App() {
  return (
    <Switch>
      <Route path="/login"><LoginComponent /></Route>
      <Route path="/signUpStudent"><SignUpStudent /></Route>
      <Route path="/signUpCoach"><SignUpCoach /></Route>
    </Switch>
  );
}

export default App;
