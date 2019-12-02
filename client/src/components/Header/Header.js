import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Fab,
  Link,
  Button,
  Typography,
  Badge
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";

import useStyles from './styles'
import classNames from 'classnames'

import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar
} from '../../context/LayoutContext'
import { useUserDispatch, signOut, useUserState } from '../../context/UserContext'

export default function Header(props) {
  const classes = useStyles();
  var { isAuthenticated } = useUserState()
  console.log(isAuthenticated)
  isAuthenticated = true

  var layoutState = useLayoutState()
  var layoutDispatch = useLayoutDispatch()
  var userDispatch = useUserDispatch()
  
  var [profileMenu, setProfileMenu] = useState(null)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            UWW Student Athlete System
          </Typography>
          {isAuthenticated && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={e => setProfileMenu(e.currentTarget)}
                color="inherit"
              >
                <AccountIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}