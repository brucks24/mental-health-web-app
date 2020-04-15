import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/AppContainer';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { purple, red } from '@material-ui/core/colors';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';
import { Router } from 'react-router-dom';
import history from './utils/history';
import { API_URL } from './config/config';
import jwtDecode from 'jwt-decode';
import { SET_AUTHENTICATED } from './redux/types';
import { getUserData, logoutUser } from './redux/actions/userActions';
import { white } from 'colors';

axios.defaults.baseURL = API_URL;

const mountNode = document.getElementById('root');

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: purple,
        panic: red,
        white: white
    }
});

// TODO: Add token verification here
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </MuiThemeProvider>,
    mountNode
);

serviceWorker.unregister();
