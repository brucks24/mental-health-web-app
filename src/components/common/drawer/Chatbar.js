import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Drawer, IconButton, List, Avatar, InputBase, Divider, ListItem, ListItemText, ListItemAvatar, Typography } from "@material-ui/core";
import { useTheme } from '@material-ui/styles';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import ChatCard from './components/ChatCard'

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


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function Chatbar(props) {
    let { ChatOpen, handleToggleChat  } = props;
    const [convoOpen, setConvoOpen] = React.useState(false);
    const [convo, setConvo] = React.useState(null);
    const theme = useTheme()
    const classes = useStyles()

    function handleOpen() {
        console.log('Open conversation chat ID ');
        //setConvoOpen(true);
        //setConvo(openChats[index]);
    }

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
            convoOpen ? 
                <React.Fragment>

                </React.Fragment>
            :
                <React.Fragment>
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
                            <div>
                                <ChatCard
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    previewMessage={item.previewMessage}
                                    handleOpenConvo={handleOpen}
                                />
                                <Divider variant="inset" component="li" />
                            </div>
                        ))}
                    </List>
                </div>
            </React.Fragment>
        </Drawer>
    )

}

export default Chatbar