import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Drawer, IconButton, List } from "@material-ui/core"
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons"
import { useTheme } from '@material-ui/styles'

import useStyles from './styles'

import Dot from './components/Dot'
import SidebarLink from './components/SidebarLink'

//This is for the links in the sidebar
const structure = [
  { id: 0, label: "Dashboard", link: '/dashboard', icon: <HomeIcon /> },
  {
    id: 1,
    label: "Athletics Department",
    link: "/",
    icon: <Dot size="large" color="primary" />
  },
  {
    id: 2,
    label: 'Sports Performance',
    link: '',
    icon: <Dot size="large" color="primary" />,
  },
  {
    id: 3,
    label: 'Sports Nutrition',
    link: '',
    icon: <Dot size="large" color="primary" />,
  },
  {
    id: 4,
    label: 'Conduct & Compliance',
    link: '',
    icon: <Dot size="large" color="primary" />,
  },
  {
    id: 5,
    label: 'Leadership Development',
    link: '',
    icon: <Dot size="large" color="primary" />,
  }
]

function Sidebar(props) {
  let { navDrawerOpen, handleToggleDrawer } = props
  const theme = useTheme()
  const classes = useStyles()

  const [isPermanent, setPermanent] = useState(true)

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
    </Drawer>
  )
}

Sidebar.propTypes = {
  navDrawerOpen: PropTypes.bool
}

export default Sidebar