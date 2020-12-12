import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Chat from '../Chat';
import { Avatar, Divider, ListItem } from "@material-ui/core";

export default function ChatCard(props) {
  const { name, image, previewMessage } = props;

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
                variant="body2"
                color="textPrimary"
                noWrap={true}
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