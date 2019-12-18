import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux'
import { Drawer, IconButton, List } from "@material-ui/core"
import {
  Home as HomeIcon,
  AccountCircle as ProfileIcon,
  People as PeopleIcon,
  Sports as TeamIcon,
  Chat as ChatIcon,
  Settings as SettingsIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons"
import { useTheme } from '@material-ui/styles'
import useStyles from './styles'
import SidebarLink from './components/SidebarLink'
import PanicButton from './components/PanicButton'
import * as crudAction from '../../../actions/crudAction'
import { connect } from 'react-redux';

//This is for the links in the sidebar
function Sidebar(props) {
  let { navDrawerOpen, handleToggleDrawer, handleSnackbarToggle, name, email } = props
  const theme = useTheme()
  const classes = useStyles()

  const [isPermanent, setPermanent] = useState(true)

  const structure = [
    {
      id: 0,
      label: `${name}`,
      subtitle: `${email}`,
      link: '',
      icon: <ProfileIcon />
    },
    {
      id: 1,
      label: "Home",
      link: '/dashboard',
      icon: <HomeIcon />
    },
    {
      id: 2,
      label: 'People',
      link: '/people',
      icon: <PeopleIcon />,
    },
    {
      id: 3,
      label: 'Teams',
      link: '/teams',
      icon: <TeamIcon />,
    },
    {
      id: 4,
      label: 'Chat',
      link: '/chat',
      icon: <ChatIcon />,
    },
    {
      id: 5,
      label: 'Settings',
      link: '/settings',
      icon: <SettingsIcon />,
    },
  ]

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: navDrawerOpen,
        [classes.drawerClose]: !navDrawerOpen,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: navDrawerOpen,
          [classes.drawerClose]: !navDrawerOpen,
        }),
      }}
      open={navDrawerOpen}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={handleToggleDrawer}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={window.location}
            isSidebarOpened={navDrawerOpen}
            {...link}
          />
        ))}
      </List>
      <PanicButton {...props} handleSnackbarToggle={handleSnackbarToggle} />
    </Drawer>
  )
}

Sidebar.propTypes = {
  navDrawerOpen: PropTypes.bool
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, crudAction), dispatch),
});

export default connect(null, mapDispatchToProps)(Sidebar)