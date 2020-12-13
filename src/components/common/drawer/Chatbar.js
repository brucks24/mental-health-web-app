import React, { useState } from "react";
import classNames from "classnames";
import { Drawer, List, InputBase, Divider, Fab } from "@material-ui/core";
import chatbarStyles from "./chatbarStyles";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ChatCard from "./components/ChatCard";
import AddIcon from "@material-ui/icons/Add";
import {
  sendChat,
  getAllChats
} from "../../../redux/actions/chatActions";
import { useDispatch } from "react-redux";
import Popup from "./components/Popup";

var openChats = [];

/*
const openChats = [{
    id: 0,
    name: 'Remy Sharp',
    image: '/static/images/avatar/1.jpg',
    previewMessage: 'Hey just wanted to check in with you about',
}]
*/

export function setChat(data, senderName) {
  openChats = [];
  var chats = data.data.result;
  chats.forEach(e => {

    var names = e.participants;
    var name = names[0];
    if (names[0] == senderName) {
      name = names[1];
    }

    var numChats = e.chats.length;
    var preview = e.chats[numChats - 1].message.substring(0, 30) + "..."

    openChats.push({
      name: name,
      image: '/static/images/avatar/1.jpg',
      previewMessage: preview
    })
  });
  console.log(chats);
  console.log(chats);
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

function Chatbar(props) {
  let { ChatOpen } = props;
  const classes = chatbarStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);

  const { name } = useSelector((state) => ({
    name: `${state.user.firstName} ${state.user.lastName}`,
    user: state.user,
  }));

  if (shouldDispatch()) {
    console.log(name);
    dispatch(getAllChats(name));
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
      <div className={classes.toolbar} />{" "}
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>{" "}
        <InputBase
          placeholder="Search for person"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{
            "aria-label": "search",
          }}
        />{" "}
      </div>{" "}
      <Divider />
      <div className={classes.chatList}>
        <List className={classes.root}>
          {" "}
          {openChats.map((item) => (
            <ChatCard
              name={item.name}
              image={item.image}
              previewMessage={item.previewMessage}
            />
          ))}{" "}
        </List>{" "}
      </div>
      <div className={classes.newChat}>
        <Fab
          variant="extended"
          color="primary"
          onClick={() => setOpenPopup(true)}
        >
          <AddIcon className={classes.extendedIcon} />
          Create{" "}
        </Fab>
      </div>{" "}
      <newMessageForm />
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
    </Drawer>
  );
}

export default Chatbar;
