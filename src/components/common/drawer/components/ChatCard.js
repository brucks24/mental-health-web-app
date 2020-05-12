import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Chat from '../Chat';
import {  IconButton, List, Avatar, InputBase, Divider, ListItem} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    maxWidth: '39ch',
  },
}));



export default function ChatCard(props){
    const classes = useStyles();
    const { name, image, previewMessage} = props;

    const [stateChatWindow, setChatWindowState] = React.useState({
        open: false
   });

   const handleChatWindow = () => setChatWindowState({ open: !stateChatWindow.open });
   

    return (
        <React.Fragment>
        <ListItem button onClick={handleChatWindow} alignItems="flex-start">
            
            <ListItemAvatar>
            <Avatar alt={name} src={image} />
            </ListItemAvatar>
            <ListItemText
            primary={name}
            secondary={
                <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                    {previewMessage}
                    </Typography>
                </React.Fragment>
            }
            />

            
        </ListItem>
        <Divider />
        <Chat
        ChatWindowOpen={stateChatWindow.open}
        handleToggleWindow={handleChatWindow}
        name={name}
        image={image}
        />
        </React.Fragment>
    );
}