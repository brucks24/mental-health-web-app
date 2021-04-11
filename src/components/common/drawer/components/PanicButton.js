import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles from './styles';
import WarningIcon from '@material-ui/icons/WarningRounded';
import { purple, red } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { panicButton } from '../../../../redux/actions/userActions';

const theme = createMuiTheme({
  palette: {
    primary: red
  }
});

const buttonTheme = createMuiTheme({ palette: { primary: purple, secondary: red } });

function PanicButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    button1: 'primary',
    button2: 'primary',
    button3: 'primary',
    button4: 'primary'
  });
  const dispatch = useDispatch();

  let buttonsClicked = [];

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleConfirm = () => {
    if (state.button1 === 'secondary')
      buttonsClicked.push('Concerns of suicide');
    if (state.button2 === 'secondary')
      buttonsClicked.push('Concerns of homicide');
    if (state.button3 === 'secondary')
      buttonsClicked.push('Sexual harassment and/or assult');
    if (state.button4 === 'secondary')
      buttonsClicked.push('Concerns about bullying and/or hazing');

    dispatch(panicButton(buttonsClicked));
    setOpen(false);
  }

  const handleChange = name => {
    if (state[name] === 'secondary') {
      setState({ ...state, [name]: 'primary' });
    } else {
      setState({ ...state, [name]: 'secondary' });
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          className={classes.panicButton}
          color="primary"
          variant="contained"
          onClick={handleClickOpen}
        >
          <WarningIcon style={{ marginRight: 16 }} />
          Panic Button
        </Button>
      </ThemeProvider>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"If you are in a life threatening situation, or this is a medical emergency, please, close this app and dial 911 immediately."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Select the boxes that apply to you, then select "I Understand":
            <ThemeProvider theme={buttonTheme}>
              <Button
                className={classes.reasonButton}
                variant="contained"
                size="large"
                color={state.button1}
                onClick={() => handleChange('button1')}
              >Concerns of suicide</Button>
              <Button
                className={classes.reasonButton}
                variant="contained"
                size="large"
                color={state.button2}
                onClick={() => handleChange('button2')}
              >Concerns of homicide</Button>
              <Button
                className={classes.reasonButton}
                variant="contained"
                size="large"
                color={state.button3}
                onClick={() => handleChange('button3')}
              >Sexual harassment and/or assault</Button>
              <Button
                className={classes.reasonButton}
                variant="contained"
                size="large"
                color={state.button4}
                onClick={() => handleChange('button4')}
              >Concers about bullying and/or hazing</Button>
            </ThemeProvider>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Exit</Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>I understand</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PanicButton