import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  DialogActions
} from "@material-ui/core";
import {
  sendChat,
} from "../../../../redux/actions/chatActions";
import { useSelector } from "react-redux";

export default function Popup(props) {
  const { openPopup, setOpenPopup } = props;
  const { name } = useSelector((state) => ({
    name: `${state.user.firstName} ${state.user.lastName}`,
    user: state.user,
  }));
  const [tmp, setTmp] = useState(true);

  var receiver = "";
  var message = "";

  async function handleSendClose() {
    await sendChat(name, receiver, message);
    setOpenPopup(false);
    setTmp(!tmp);
  };
  const handleClose = () => {
    setOpenPopup(false);
  };

  const messageChange = (e) => {
    message = e.target.value;
  };

  const receiverChange = (e) => {
    receiver = e.target.value;
  };

  return (
    <Dialog open={openPopup}>
      <DialogTitle>Create Message </DialogTitle>{" "}
      <DialogContent>
        <form>
          <TextField
            autoFocus
            onChange={receiverChange}
            margin="dense"
            id="name"
            label="Name"
            type="userName"
            fullWidth
          />

          <TextField
            autoFocus
            onChange={messageChange}
            margin="dense"
            id="message"
            label="Message"
            type="typedMessage"
            fullWidth
          />
          <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSendClose}>
            Send{" "}
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close{" "}
          </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}