import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    TextField,
    DialogContent,
    DialogTitle,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles from './styles';
import { purple } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { sendMessageAction } from '../../../../redux/actions/userActions';

const theme = createMuiTheme({
    palette: {
        primary: purple
    }
});

function SendMessageButton(props) {
    const firstName = props.firstName;
    const lastName = props.lastName;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    let subject = "";
    let message = "";

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleConfirm = () => {
        let props = {subject, message};
        dispatch(sendMessageAction(props));
        setOpen(false);
    }

    const handleChange = field => {
        if(field.target.id == "subject"){
            subject = field.target.value;
        }else{
            message = field.target.value;
        }
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button
                    className={classes.button}
                    fullWidth={true}
                    color="primary"
                    variant="contained"
                    onClick={handleClickOpen}
                >
                    Send Message
                </Button>
            </ThemeProvider>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="message-dialog-title"
                aria-describedby="message-dialog-description"
            >
                <DialogTitle id="message-dialog-title">
                    {`Type the message that you want to send to ${firstName} ${lastName}.`}
                </DialogTitle>
                <DialogContent id="message-dialog-description">
                    <TextField onChange = {handleChange}
                        autoFocus
                        multiline
                        rows={1}
                        rowsMax={1}
                        margin = "dense"
                        id = "subject"
                        label = "Subject"
                        type = "userSubject"
                        fullWidth 
                    />
                    <TextField onChange = {handleChange}
                        autoFocus
                        multiline
                        rows={6}
                        rowsMax={6}
                        margin = "dense"
                        id = "message"
                        label = "Message"
                        type = "userMessage"
                        fullWidth 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                    <Button onClick={handleConfirm} color="primary" autoFocus>Send Message</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SendMessageButton