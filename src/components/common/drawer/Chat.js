import React, { useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SendIcon from "@material-ui/icons/Send";
import { IconButton, Avatar, InputBase, Divider } from "@material-ui/core";
import "react-chat-elements/dist/main.css";
import useSound from "use-sound";
import send from "../../sounds/send.mp3";
import receive from "../../sounds/receive.mp3";
import { MessageBox, MessageList } from "react-chat-elements";
import { useSelector } from "react-redux";
import { sendChat, getChats } from "../../../redux/actions/chatActions";

var map = new Map();
function shouldDispatch(receiverName) {
  if (!map.has(receiverName)) {
    map.set(receiverName, -1);
  }

  if (map.get(receiverName) < new Date().getTime()) {
    map.set(receiverName, new Date().getTime() + 2500);
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
    marginBottom: 0,
    width: "100%",
    height: 50,
    background: "white",
  },
  chat: {
    position: "relative",
    marginRight: theme.spacing(1),
    marginLeft: 0,
    marginBottom: 20,
    paddingTop: 0,
    paddingBottom: 10,
    width: "100%",
    overflowY: "scroll",
  },
  inputArea: {
    background: "white",
    position: "fixed",
    bottom: theme.spacing(0),
    width: "100%",
    height: "7ch",
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
    padding: theme.spacing(0),
  },
  name: {
    ...theme.typography,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    top: theme.spacing(2),
    left: theme.spacing(15),
    paddingLeft: theme.spacing(1),
    //display: 'flex',
    justifyContent: "center",
  },
}));
var oldNumMessages = null;

export default function Chat(props) {
  let { ChatWindowOpen, handleToggleWindow, image } = props;
  var receiverName = props.name;
  const classes = useStyles();
  const [playSend] = useSound(send);
  const [playReceive] = useSound(receive);

  const { name } = useSelector((state) => ({
    name: `${state.user.firstName} ${state.user.lastName}`,
    user: state.user,
  }));

  setInterval(() => {
    setTmp(!tmp);
  }, 5000);

  const [curMessage, setCurMessage] = useState("");
  const [tmp, setTmp] = useState(false);
  const [messages, setMessages] = useState({ messages: [] });
  useEffect(() => {
    const fetchMsgs = async () => {
      if (!shouldDispatch(receiverName)) {
        return;
      }
      var chats = await getChats(name, receiverName);
      var c = chats.data.result;
      var allChats = [];
      c.forEach((e) => {
        var tmpObj = [];
        e.chats.forEach((e2) => {
          var side = "right";
          if (e2.sender !== name) {
            side = "left";
          }

          tmpObj.push({
            message: e2.message,
            title: e2.sender,
            side: side,
            time: e2.time,
          });
        });
        var newMessages = e.chats.length;

        if (oldNumMessages == null) {
          oldNumMessages = new Map();
        }
        if (oldNumMessages.has(e._id)) {
          if (
            tmpObj.title !== name &&
            newMessages > oldNumMessages.get(e._id)
          ) {
            playReceive();
          }
        }
        oldNumMessages.set(e._id, { length: e.chats.length });

        allChats.push({
          participants: e.participants,
          msgs: tmpObj,
        });
      });
      setMessages({ messages: allChats });
    };
    fetchMsgs();
  }, [tmp]);

  async function handleSubmit(e) {
    await sendChat(name, receiverName, curMessage);
    setCurMessage("");
    playSend();
    setTmp(!tmp);
  }

  function messageChange(e) {
    setCurMessage(e.target.value);
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
        {messages.messages !== undefined &&
          messages.messages.map((item) => {
            let listItems;
            if (item.participants.includes(receiverName)) {
              listItems = item.msgs.map((m) => (
                <MessageBox
                  position={m.side}
                  type={"text"}
                  title={m.title}
                  text={m.message}
                  date={new Date(m.time)}
                  data={{
                    uri: "https://facebook.github.io/react/img/logo.svg",
                  }}
                  key={m.title + m.time}
                />
              ));
            }
            return (typeof listItems !== 'undefined') ? listItems : "";
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
            rowsMax="2"
            multiline={true}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{
              "aria-label": "Send Message",
            }}
            onChange={messageChange}
            value={curMessage}
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
