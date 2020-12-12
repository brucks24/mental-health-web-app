import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  DialogActions
} from "@material-ui/core";
import {
  getUserChats,
  sendUserMessage,
  markMessageRead,
  getUserConvos,
} from "../../../../redux/actions/chatActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Popup(props) {
  const { openPopup, setOpenPopup } = props;
  const dispatch = useDispatch();
  const { name } = useSelector((state) => ({
    name: `${state.user.firstName} ${state.user.lastName}`,
    user: state.user,
  }));

  var receiver = "";
  var message = "";

  const sendClose = () => {
    dispatch(sendUserMessage(name, receiver, message));
    setTimeout(() => {
      dispatch(getUserConvos(name));
    }, 2000);
    setOpenPopup(false);
  };

  const messageChange = (e) => {
    message = e.target.value;
  };
  const handleClose = () => {
    setOpenPopup(false);
  };

  const receiverChange = (e) => {
    receiver = e.target.value;
  };

  return (

    <div>     
    <Dialog open={openPopup} contentStyle={{width: "100%"}}>    
      <DialogTitle>Create Message</DialogTitle>{" "}
      
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
          <Button variant="contained" color="primary" onClick={sendClose}>
            Send{" "}
          </Button> 
          <Button variant="contained" color="Secondary" onClick={handleClose}>
            Close{" "}
          </Button>   
          </DialogActions>
   
        </form>
        </DialogContent>
      
    </Dialog>
    
    </div>
  );
}
