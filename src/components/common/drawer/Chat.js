import React, {forceUpdate, useRef,useState,useEffect} from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SendIcon from "@material-ui/icons/Send";
import { IconButton, Avatar, InputBase, Divider, Grid } from "@material-ui/core";
import "react-chat-elements/dist/main.css";
import { MessageBox, MessageList } from "react-chat-elements";
import { useDispatch, useSelector } from "react-redux";
import { getAllChats, sendChat, getChats } from "../../../redux/actions/chatActions";
import { Eco } from "@material-ui/icons";

var messages = [];

export const setMessages = (data, senderName) => {
  messages = [];
  var c = data.data.result;
  c.forEach(e => {
    e.chats.forEach(e2 => {

      var side = "right";
      if (e2.sender != senderName) {
        side = "left";
      }

      messages.push({
        message: e2.message,
        title: e2.sender,
        side: side,
        time: e2.time
      });
    });
    })
}


var lastDispatch = new Date().getTime();
function shouldDispatch() {
  if (new Date().getTime() > lastDispatch + 1000) {
    lastDispatch = new Date().getTime();
    return true;
  } else {
    return false;
  }
}

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
    marginBottom: 7,
    width: "100%",
    height:"95%",
    background: "white",
  },
  chat: {
    position: "relative",
    marginRight: theme.spacing(1),
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 55,
    width: "100%",
  },
  inputArea: {
    background: "white",
    position: "fixed",
    bottom: theme.spacing(0),
    width: "100%",
    height: "6ch",
    overflow: "scroll",
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
  let { ChatWindowOpen, handleToggleWindow, image } = props;
  var receiverName = props.name;
  const classes = useStyles();

  const { name } = useSelector(state => ({
    name: `${state.user.firstName} ${state.user.lastName}`,
    user: state.user,
}));

  
  const dispatch = useDispatch();

  const [msgs, setMessages] = useState(messages);
  useEffect(() => {
    if (name == undefined || receiverName == undefined) {
      return;
    } else {
      setInterval(() => {
        var tmp = name;
        if (tmp == "undefined undefined" || receiverName == "undefined undefined") {
          return;
        }
        if (shouldDispatch()) {
          dispatch(getChats(name, receiverName));
        }
      }, 1000);
    }
  }, [name, receiverName]);

  function handleSubmit(e) {
    dispatch(sendChat(name, receiverName, message));
    e.target.value = "";
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
        {messages.map(item => {
          return (
            <MessageBox
              position={item.side} //outgoing message is right
              type={"text"}
              title={item.title}
              text={item.message} //message
              date={new Date(item.time)}
              data={{
                uri: "https://facebook.github.io/react/img/logo.svg",
              }}
            />            
          );
          
        })}  
      </div>
      <div>
        <MessageList
          className={classes.chat}
          lockable={true}
          toBottomHeight={"100%"}
        />
      </div>
      <form>
        <div className={classes.inputArea}>
          <Divider />
          <InputBase
            placeholder="Send a Message..."
            multiline={true}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{
              "aria-label": "Send Message",
            }}
            onChange={messageChange}
            margin="dense"
          />{" "}
          <IconButton aria-label="send" onClick={handleSubmit}>
            <SendIcon color="primary" />
          </IconButton>{" "}
        </div>{" "}
        
      </form>
      
      
      
    </Drawer>
    
    
  );
}
