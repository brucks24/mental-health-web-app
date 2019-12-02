import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom'
import LoginComponent from '../containers/login'
import { SignUpStudent, SignUpCoach } from '../containers/signup'
import Dashboard from '../containers/dashboard'
import Error from '../containers/error'

import { useUserState } from '../context/UserContext'

export default function App() {
  var { isAuthenticated } = useUserState()
  console.log(isAuthenticated)

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app" />} />
        <PublicRoute path="/app" component={Dashboard} />
        <PrivateRoute path="/app/dashboard" component={Dashboard} />
        {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
        {/* <PublicRoute path="/home" component={Dashboard} /> */}
        <Route component={Error} />
      </Switch>
    </HashRouter>
  )

  function PrivateRoute({ component, ...rest }) {

  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route 
        {...rest}
        render={props => 
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        } 
      />
    )
  }
}
