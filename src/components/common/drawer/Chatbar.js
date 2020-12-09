import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Drawer, IconButton, List, Avatar, InputBase, Divider, Fab, Button } from "@material-ui/core";
import { useTheme } from '@material-ui/styles';
import chatbarStyles from './chatbarStyles';
import { useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import ChatCard from './components/ChatCard'
import Chat from './Chat';
import AddIcon from '@material-ui/icons/Add';
import { getUserChats } from '../../../redux/actions/chatActions';
import { useDispatch } from 'react-redux';


var openChats = [];
/*
const openChats = [{
        id: 0,
        name: 'Remy Sharp',
        image: '/static/images/avatar/1.jpg',
        previewMessage: 'Hey just wanted to check in with you about',
    }]
*/


function Chatbar(props) {
    let { ChatOpen } = props
    const theme = useTheme();
    const classes = chatbarStyles();

    const dispatch = useDispatch();
    const [userData, setUserData] = React.useState({});

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Test 123')
        dispatch(getUserChats(userData, props.history))
    }


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

        <div className = { classes.toolbar } />
        <div className = { classes.search } >
            <div className = { classes.searchIcon } >
                <SearchIcon / >
            </div> 
            <InputBase placeholder = "Search for person"
            classes = {
                {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }
            }
            inputProps = {
                { 'aria-label': 'search' }
            }
            />
        </div>
        <Divider/>

        <div className = { classes.chatList }>
        <List className = { classes.root }> {
            openChats.map(item => ( <
                ChatCard name = { item.name }
                image = { item.image }
                previewMessage = { item.previewMessage }

                />
            ))
        } 
        </List> 
        </div>

        <div className = { classes.newChat } >
            <Fab variant = "extended" color = "primary" >
                <Button onClick={handleSubmit} type="submit">
                    <AddIcon className = { classes.extendedIcon }/>Create
                </Button>
            </Fab>
        </div>
        </Drawer>
    )

}

export default Chatbar