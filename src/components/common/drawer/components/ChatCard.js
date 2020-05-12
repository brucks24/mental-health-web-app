import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chat from '../Chat';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
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

        <ListItem button='true' onClick={handleChatWindow} alignItems="flex-start">
            
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
            <Chat
                ChatWindowOpen={stateChatWindow.open}
                handleToggleWindow={handleChatWindow}
                name={name}
                image={image}
            />
        </ListItem>
    );
}