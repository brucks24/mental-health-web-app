import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import {
    sendUserMessage
} from '../../../../redux/actions/chatActions';
import {
    useDispatch
} from 'react-redux';
import { useSelector } from 'react-redux';

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({});
  const { name, user } = useSelector(state => ({
    name: `${state.user.firstName} ${state.user.lastName}`,
    user: state.user,
  }));

  const handleClose = () => {
    dispatch(sendUserMessage(name, 'fuck', "fuck"));
    setOpenPopup(false);
  };

  return (
    <Dialog open={openPopup}>
      <DialogTitle>Create Message </DialogTitle>{" "}
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="userName"
          fullWidth
        />

        <TextField
          autoFocus
          margin="dense"
          id="message"
          label="Message"
          type="typedMessage"
          fullWidth
        />

        <Button variant="contained" color="primary" onClick={handleClose}>
          Send{" "}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
