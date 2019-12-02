import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom'
import LoginComponent from '../containers/login'
import { SignUpStudent, SignUpCoach } from '../containers/signup'

import Login from '../containers/login'
import Dashboard from '../containers/dashboard'
import Error from '../containers/error'

import { useUserState } from '../context/UserContext'

export default function App() {
  var { isAuthenticated } = useUserState()
  isAuthenticated = true
  console.log(isAuthenticated)

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />

        <PrivateRoute path="/app" component={Dashboard} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  )

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
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
    );
  }
}
