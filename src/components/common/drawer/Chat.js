import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import {  IconButton, List, Avatar, InputBase, Divider, ListItem} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  list: {
    width: 310,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
      //color: "primary"
    },
  },
  drawerOpen: {
    width: 310,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  header: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 7,
    width: '100%',
  },
  chat: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(1),
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 7,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  input: {
    position: 'absolute',
    bottom: theme.spacing(3),
    width: '100%',
  },
  inputRoot: {
    color: 'inherited',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Chat(props) {
  let { ChatWindowOpen, handleToggleWindow } = props
  const classes = useStyles();

  return (
    <Drawer 
    anchor="right" 
    open={ChatWindowOpen} 
    className={classes.drawerOpen} 
    variant='persistent' 
    classes={{paper:classes.drawerOpen}}
    >
        <div className={classes.toolbar}/>
        <div className={classes.header}>
            <IconButton onClick={handleToggleWindow} aria-label="delete">
                <ArrowBackIcon />
            </IconButton>
            <Divider />
        </div>

        <div className={classes.chat}>
            This is where the chat will go
        </div>

        <div className={classes.input}>
        <Divider />
        <InputBase
            placeholder="Send a Message..."
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
        </div>
    </Drawer>
  );
}