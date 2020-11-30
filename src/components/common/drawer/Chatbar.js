import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Drawer, IconButton, List, Avatar, InputBase, Divider, Fab } from "@material-ui/core";
import { useTheme } from '@material-ui/styles';
import chatbarStyles from './chatbarStyles';
import { useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import ChatCard from './components/ChatCard'
import Chat from './Chat';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';

// TODO Populate this array with chats from the database. 
function loadChats(userId) {
    let chats = [{}];

    return chats;
}

const openChats = loadChats(1);
/*
const openChats = [{
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
    {
        id: 4,
        name: 'Micheal Scott',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png',
        previewMessage: 'You need paper?',
    },
    {
        id: 5,
        name: 'Barack Obama',
        image: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
        previewMessage: 'We got the Changes for you and your people',
    },
    {
        id: 6,
        name: 'John Garcia',
        image: '',
        previewMessage: 'You get those papers I sent over?',
    },
    {
        id: 7,
        name: 'Rick Sanchez',
        image: '/static/images/avatar/2.jpg',
        previewMessage: 'Ready for an adventure?',
    },
    {
        id: 8,
        name: 'David Miller',
        image: '/static/images/avatar/3.jpg',
        previewMessage: 'test test test test test test',
    },
    {
        id: 9,
        name: 'Patricia Joseph',
        image: '/static/images/avatar/2.jpg',
        previewMessage: 'test test test',
    },
    {
        id: 10,
        name: 'Mary Smith',
        image: '/static/images/avatar/2.jpg',
        previewMessage: 'test test test test test test test test test test test test',
    },
    {
        id: 11,
        name: 'Dorothy Jones',
        image: '/static/images/avatar/3.jpg',
        previewMessage: 'test test test',
    },
    {
        id: 12,
        name: 'Barbara Wilson',
        image: 'test test test test test test test test test',
        previewMessage: 'Test test',
    },
    {
        id: 13,
        name: 'Margaret Joseph',
        image: '/static/images/avatar/2.jpg',
        previewMessage: 'test test test',
    },
    {
        id: 14,
        name: 'William Smith',
        image: '/static/images/avatar/2.jpg',
        previewMessage: 'test test test test test test test test test test test test',
    },
    {
        id: 15,
        name: 'Thomas Jones',
        image: '/static/images/avatar/3.jpg',
        previewMessage: 'test test test',
    },
    {
        id: 16,
        name: 'Linda Wilson',
        image: 'test test test test test test test test test',
        previewMessage: 'Test test',
    },
]
*/

function Chatbar(props) {
    let { ChatOpen } = props
    const theme = useTheme();
    const classes = chatbarStyles();

    return ( <
        Drawer variant = "persistent"
        className = {
            classNames(classes.drawer, {
                [classes.drawerOpen]: ChatOpen,
                [classes.drawerClose]: !ChatOpen,
            })
        }

        anchor = "right"
        open = { ChatOpen }
        classes = {
            {
                paper: classNames({
                    [classes.drawerOpen]: ChatOpen,
                    [classes.drawerClose]: !ChatOpen,
                }),
            }
        } >

        <
        div className = { classes.toolbar }
        /> <
        div className = { classes.search } >
        <
        div className = { classes.searchIcon } >
        <
        SearchIcon / >
        <
        /div> <
        InputBase placeholder = "Search for person"
        classes = {
            {
                root: classes.inputRoot,
                input: classes.inputInput,
            }
        }
        inputProps = {
            { 'aria-label': 'search' }
        }
        /> < /
        div > <
        Divider / >

        <
        div className = { classes.chatList } >
        <
        List className = { classes.root } > {
            openChats.map(item => ( <
                ChatCard name = { item.name }
                image = { item.image }
                previewMessage = { item.previewMessage }

                />
            ))
        } <
        /List> < /
        div >

        <
        div className = { classes.newChat } >
        <
        Fab variant = "extended"
        color = "primary" >
        <
        AddIcon className = { classes.extendedIcon }
        />
        Create <
        /Fab> < /
        div > <
        /Drawer>
    )

}

export default Chatbar