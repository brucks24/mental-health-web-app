import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Drawer, IconButton, List, Avatar, InputBase, Divider, Fab } from "@material-ui/core";
import { useTheme } from '@material-ui/styles';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import ChatCard from './components/ChatCard'
import Chat from './Chat';
import AddIcon from '@material-ui/icons/Add';

const openChats = [
    {
        id: 0,
        name: 'Remy Sharp',
        image: '/static/images/avatar/1.jpg',
        previewMessage: 'Hey just wanted to check in with you about',
    },
    {
        id: 1,
        name: 'Travis Howard',
        image: '/static/images/avatar/2.jpg',
        previewMessage: 'Hows it going?',
    },
    {
        id: 2,
        name: 'Cindy Baker',
        image: '/static/images/avatar/3.jpg',
        previewMessage: 'I got your report looks good I just wanted to add one thing',
    },
    {
        id: 3,
        name: 'John Doe',
        image: 'https://www.themandarin.com.au/content/uploads/2019/10/space-nebula.jpg',
        previewMessage: 'Test test',
    },
]

  

function Chatbar(props) {
    let { ChatOpen } = props
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Drawer
            variant="persistent"
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: ChatOpen,
            })}

            anchor="right"
            open={ChatOpen}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: ChatOpen,
                }),
            }}
        >
            
            <div className={classes.toolbar} />
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder="Search for person"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <Divider />

            <div className={classes.chatList}>
            <List className={classes.root}>
                {openChats.map(item => (
                    <ChatCard 
                        name={item.name}
                        image={item.image}
                        previewMessage={item.previewMessage} 

                    />
                ))}
            </List>
            </div>
            
            <div className={classes.newChat}>
            <Fab variant="extended" color="primary">
                <AddIcon className={classes.extendedIcon} />
                Create
            </Fab>
            </div>
        </Drawer>
    )

}

export default Chatbar