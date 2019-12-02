import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { config } from './config'
import { LayoutProvider } from './context/LayoutContext'
import { UserProvider } from './context/UserContext'

const theme = createMuiTheme({
    palette: {
        primary: { main: config.theme.primaryColor },
        secondary: { main: config.theme.secondaryColor }
    }
})

ReactDOM.render(
    <LayoutProvider>
        <UserProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </UserProvider>
    </LayoutProvider>,  
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
