import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Drawer, List, InputBase, Divider, Fab } from "@material-ui/core";
import chatbarStyles from "./chatbarStyles";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ChatCard from "./components/ChatCard";
import AddIcon from "@material-ui/icons/Add";
import {
  getAllChats
} from "../../../redux/actions/chatActions";
import Popup from "./components/Popup";

function Chatbar(props) {
  let { ChatOpen } = props;
  const classes = chatbarStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const { name } = useSelector((state) => ({
    name: `${state.user.firstName} ${state.user.lastName}`,
    user: state.user,
  }));

  const [chatCards, setChatCards] = useState([]);
  useEffect(() => {
    const fetchMsgs = async () => {
      var chats = await getAllChats(name);
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

        var names = e.participants;
        var oppo = names[0];
        if (names[0] === name) {
          oppo = names[1];
        }
        var numChats = e.chats.length;
        var preview = "Click to start the conversation.";
        if (e.chats.length > 0) {
          preview = e.chats[numChats - 1].message.substring(0, 30) + "...";
        }

        var chatCard = {
          name: oppo,
          image: "/static/images/avatar/1.jpg",
          previewMessage: preview,
        };

        allChats.push({
          participants: e.participants,
          msgs: tmpObj,
          cc: chatCard,
        });
      });

      setChatCards(allChats);
    };
    fetchMsgs();
  }, [name]);

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
          {chatCards !== undefined &&
            chatCards.map((m) => (
              <ChatCard
                name={m.cc.name}
                image={m.cc.image}
                previewMessage={m.cc.previewMessage}
              />
            ))
          }
        </List>
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
