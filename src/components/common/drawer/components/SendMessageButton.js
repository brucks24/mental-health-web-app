/*
*	Coded by: Solomon Paprocki
*	Time: Spring 2021 Semester
*	Description: This is connecting the Support Team Card to the Send Message Button Functionality
*/

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
//import { sendMessageButton } from '../../../../redux/actions/userActions';

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

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleConfirm = () => {
        /*dispatch(sendMessageButton(buttonsClicked));*/
        setOpen(false);
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
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Type the message that you want to send to ${firstName} ${lastName}.`}
                </DialogTitle>
                <DialogContent>
                <TextField autoFocus
                    multiline
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