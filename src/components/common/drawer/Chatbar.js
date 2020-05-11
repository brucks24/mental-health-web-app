import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Drawer, IconButton, List, Avatar, InputBase, Divider } from "@material-ui/core";
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
  import SearchIcon from '@material-ui/icons/Search';


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
            <div className={classes.text}>{"Search for people to chat with: "}</div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <Divider />
            <div className={classes.chatList}>
                <div className={classes.text}>{"Open chats shown below: "}</div>

            </div>


        </Drawer>
    )

}

export default Chatbar