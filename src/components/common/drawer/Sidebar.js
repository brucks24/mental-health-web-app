import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Drawer, IconButton, List, Avatar } from "@material-ui/core";
import {
    Home as HomeIcon,
    Sports as TeamIcon,
    Settings as SettingsIcon,
    ArrowBack as ArrowBackIcon,
    SentimentSatisfiedAltOutlined as SupportTeamIcon,
    Drafts as InboxIcon,
    Group as YourTeammates
} from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';
import useStyles from './styles';
import SidebarLink from './components/SidebarLink';
import PanicButton from './components/PanicButton';
import { useSelector } from 'react-redux';

//This is for the links in the sidebar
function Sidebar(props) {
    let { navDrawerOpen, handleToggleDrawer, handleSnackbarToggle } = props
    const theme = useTheme();
    const classes = useStyles();

    const { name, user } = useSelector(state => ({
        name: `${state.user.firstName} ${state.user.lastName}`,
        user: state.user,
    }));

    const [isPermanent, setPermanent] = useState(true);

    const structure = [{
            id: 0,
            label: `${name}`,
            link: '/dashboard',
            icon: < Avatar alt = { name }
            src = { user.photoUrl }
            />,
            children: [{
                    id: 0,
                    label: 'Profile',
                    link: `/user/${user._id}`,
                },
                {
                    id: 1,
                    label: 'Notifications',
                    link: `/user/${user.id}/notifications`

                },
                {
                    id: 2,
                    label: 'Profile settings',
                    link: '/',
                },
            ]
        },

        {
            id: 1,
            label: 'Support Services',
            link: '/dashboard',
            icon: < HomeIcon / > ,
            children: [{
                    id: 0,
                    label: 'On Campus',
                    link: '/dashboard'
                },
                {
                    id: 1,
                    label: 'Off Campus',
                    link: '/dashboard/off-campus'
                }
            ]
        },
        {
            id: 2,
            label: 'Your Inbox',
            link: '/inbox',
            icon: < InboxIcon / >
        },
        {
            id: 3,
            label: 'Your Support Team',
            link: '/support-team',
            icon: < SupportTeamIcon / >
        },
        {
            id: 4,
            label: 'Your Teams',
            link: '/your-teams/Teams',
            icon: < YourTeammates / >
        },
        {
            id: 5,
            label: 'Other Teams',
            link: '/teams',
            icon: < TeamIcon / > ,
        },
        {
            id: 6,
            label: 'Settings',
            link: '/settings',
            icon: < SettingsIcon / > ,
        },
    ];

    useEffect(function() {
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

    return ( <
        Drawer variant = { isPermanent ? "permanent" : "temporary" }
        className = {
            classNames(classes.drawer, {
                [classes.drawerOpen]: navDrawerOpen,
                [classes.drawerClose]: !navDrawerOpen,
            })
        }
        classes = {
            {
                paper: classNames({
                    [classes.drawerOpen]: navDrawerOpen,
                    [classes.drawerClose]: !navDrawerOpen,
                }),
            }
        }
        open = { navDrawerOpen }
        anchor = "left" >
        <
        div className = { classes.toolbar }
        /> <
        div className = { classes.mobileBackButton } >
        <
        IconButton onClick = { handleToggleDrawer } >
        <
        ArrowBackIcon classes = {
            {
                root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }
        }
        /> <
        /IconButton> <
        /div> <
        List className = { classes.sidebarList } > {
            structure.map(link => ( <
                SidebarLink key = { link.id }
                location = { window.location }
                isSidebarOpened = { navDrawerOpen } {...link }
                />
            ))
        } <
        /List> <
        PanicButton {...props }
        handleSnackbarToggle = { handleSnackbarToggle }
        /> <
        /Drawer>
    )
}

export default Sidebar