import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Drawer, IconButton, List, Avatar } from "@material-ui/core";
import { useTheme } from '@material-ui/styles';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import {
    Home as HomeIcon,
    Sports as TeamIcon,
    Settings as SettingsIcon,
    ArrowBack as ArrowBackIcon,
    SentimentSatisfiedAltOutlined as SupportTeamIcon,
    Drafts as InboxIcon,
    RecordVoiceOver as ChatIcon,
    Group as YourTeammates
  } from '@material-ui/icons';


function Chatbar(props) {
    let { ChatOpen, handleToggleChat} = props
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Drawer
            variant="persistent"
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: ChatOpen,
                [classes.drawerClose]: !ChatOpen,
            })}
            anchor="right"
            open={ChatOpen}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: ChatOpen,
                    [classes.drawerClose]: !ChatOpen,
                }),
            }}
        >
            <div className={classes.toolbar} />
            <div className={classes.mobileBackButton}>


                
            </div>

        </Drawer>
    )

}

export default Chatbar