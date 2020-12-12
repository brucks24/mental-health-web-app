import React, {forceUpdate} from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SendIcon from "@material-ui/icons/Send";
import { IconButton, Avatar, InputBase, Divider } from "@material-ui/core";
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";
import { useDispatch, useSelector } from "react-redux";
import { getUserChats, getConvoId, sendUserMessage } from "../../../redux/actions/chatActions";

var messages = [];

var lastDispatch = Date.now();

function shouldDispatch() {
  const rightNow = Date.now();
  if (rightNow - lastDispatch > 500) {
    lastDispatch = Date.now();
    return true;
  } else {
    return false;
  }
}

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

export function setMessages(msgs) {
  console.log('Updating messages.')
  messages = msgs;
}

export default function Chat(props) {
  let { ChatWindowOpen, handleToggleWindow, image } = props;
  var receiverName = props.name;
  const classes = useStyles();

  const { name } = useSelector(state => ({
    name: `${state.user.firstName} ${state.user.lastName}`,
    user: state.user,
}));

  const dispatch = useDispatch();

  if (shouldDispatch()) {
    dispatch(getUserChats(name, receiverName));
  }

  function handleSubmit(e) {
    dispatch(sendUserMessage(name, receiverName, message));
    if (messageTarget != null) {
      messageTarget.value = "";
    }
    setTimeout(() => {
      dispatch(getUserChats(name, receiverName));
    }, 2000);
  }

  var message = "";
  var messageTarget = null;
  function messageChange(e) {
    messageTarget = e.target;
    message = e.target.value;
  }

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
          
          return (
            <MessageBox
              position={value.side} //outgoing message is right
              type={"text"}
              text={value.message} //message
              date={new Date(value.time)}
              data={{
                uri: "https://facebook.github.io/react/img/logo.svg",
              }}
            />
          );
        })}
      </div>
      <form>
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
            onChange={messageChange}
          />{" "}
          <IconButton aria-label="send" onClick={handleSubmit}>
            <SendIcon color="primary" />
          </IconButton>{" "}
        </div>{" "}
      </form>
    </Drawer>
  );
}
