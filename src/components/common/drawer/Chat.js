import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SendIcon from "@material-ui/icons/Send";
import SearchIcon from "@material-ui/icons/Search";
import {
  IconButton,
  List,
  Avatar,
  InputBase,
  Divider,
  ListItem,
} from "@material-ui/core";
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";
import { useDispatch, useSelector } from "react-redux";
import {getUserChats, getConvoId} from '../../../redux/actions/chatActions'

export function setMessages(mesages) {
  mesages = messages;
}

var messages = [
  {
    message: "123",
    side: "right"
  },
  {message: "456", side: "left"}
];
/*
message template:
{
  message: 'some text'
  side: 'left/right'
}
*/

const useStyles = makeStyles((theme) => ({
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
    background: "#f2f2f2",
  },
  header: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 12,
    width: "100%",
    background: "white",
  },
  chat: {
    position: "relative",
    marginRight: theme.spacing(1),
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 7,
    width: "100%",
  },
  inputArea: {
    background: "white",
    position: "absolute",
    bottom: theme.spacing(0),
    width: "100%",
    height: "6ch",
  },
  inputRoot: {
    color: "inherited",
    border: "primary",
  },
  inputInput: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.2),
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: "100%",
    paddingLeft: theme.spacing(2),
  },
  avatar: {
    position: "absolute",
    top: theme.spacing(1),
    left: theme.spacing(10),
  },
  name: {
    ...theme.typography,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    top: theme.spacing(2),
    left: theme.spacing(15),
    padding: theme.spacing(1),
    //display: 'flex',
    justifyContent: "center",
  },
}));

export default function Chat(props) {
  let { ChatWindowOpen, handleToggleWindow, receiverName, image } = props;
  const classes = useStyles();
  const [userData, setUserData] = React.useState({});
  const { senderName, user } = useSelector(state => ({
      name: `${state.user.firstName} ${state.user.lastName}`,
      user: state.user,
  }));
  const dispatch = useDispatch();
  dispatch(getUserChats(senderName, receiverName));

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={ChatWindowOpen}
      className={classes.drawerOpen}
      classes={{
        paper: classes.drawerOpen,
      }}
    >
      <div className={classes.toolbar} />{" "}
      <div className={classes.header}>
        <IconButton onClick={handleToggleWindow} aria-label="back">
          <ArrowBackIosIcon />
        </IconButton>
        <div className={classes.avatar}>
          <Avatar alt={receiverName} src={image} />{" "}
        </div>{" "}
        <div className={classes.name}> {receiverName} </div>
        <Divider />
      </div>{" "}
      <div className={classes.chat}>
          {messages.map((value, index) => {
            return <MessageBox
            position={value.side} //outgoing message is right
            type={"text"}
            text={value.message} //message
            data={{
              uri: "https://facebook.github.io/react/img/logo.svg",
            }}
            />
          })};
      </div>
      <div className={classes.inputArea}>
        <Divider />
        <InputBase
          placeholder="Send a Message..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{
            "aria-label": "Send Message",
          }}
        />{" "}
        <IconButton aria-label="send">
          <SendIcon color="primary" />
        </IconButton>{" "}
      </div>{" "}
    </Drawer>
  );
}
