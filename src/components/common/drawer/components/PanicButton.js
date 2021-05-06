import React from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  FormGroup
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles from './styles';
import WarningIcon from '@material-ui/icons/WarningRounded';
import { red } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { panicButton } from '../../../../redux/actions/userActions';

const theme = createMuiTheme({
  palette: {
    primary: red
  }
});

const buttonTheme = createMuiTheme({ palette: { primary: red} });

function PanicButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    suicide: false,
    homicide: false,
    sexualAssault: false,
    bullying: false
  });
  const dispatch = useDispatch();
  const { suicide, homicide, sexualAssault, bullying } = state;
  const labels = {
    suicide: "Concerns of suicide",
    homicide: "Concerns of homicide",
    sexualAssault: "Sexual harassment and/or assault",
    bullying: "Concerns about bullying and/or hazing"
  }
  let reasons = [];

  //Resets all checkboxes to unchecked, called after modal is closed or submitted
  const resetState = () => {
    setState({
      suicide: false,
      homicide: false,
      sexualAssault: false,
      bullying: false
    });
  }

  //Opens the modal
  const handleClickOpen = () => {
    setOpen(true);
  }

  //Resets the checkboxes and closes the modal
  const handleClose = () => {
    resetState();
    setOpen(false);
  }

  //Sends reasons to userActions.js, resets the checkboxes, closes the modal
  const handleConfirm = () => {
    if(suicide){
      reasons.push(labels.suicide);
    }
    if(homicide){
      reasons.push(labels.homicide);
    }
    if(sexualAssault){
      reasons.push(labels.sexualAssault);
    }
    if(bullying){
      reasons.push(labels.bullying);
    }
    dispatch(panicButton(reasons));
    resetState();
    setOpen(false);
  }

  //Handles the checking and unchecking of the checkboxes
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //Displays the modal
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
        <DialogContent>
        <ThemeProvider theme={buttonTheme}>
          <DialogContentText id="alert-dialog-description">
          If you are in a life threatening situation, or this is a medical emergency, please, close this app and dial 911 immediately.  Select the boxes that apply to you, then select "I Understand":
          </DialogContentText>
          <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                  className={classes.reasonButton}
                  onChange={handleChange}
                  checked={suicide}
                  name="suicide"
                  color="primary"
                ></Checkbox>
                }
                label={labels.suicide}
              />
              <FormControlLabel
                control={
                  <Checkbox
                  className={classes.reasonButton}
                  onChange={handleChange}
                  checked={homicide}
                  name="homicide"
                  color="primary"
                ></Checkbox>
                }
                label={labels.homicide}
              />
              <FormControlLabel
                control={
                  <Checkbox
                  className={classes.reasonButton}
                  onChange={handleChange}
                  checked={sexualAssault}
                  name="sexualAssault"
                  color="primary"
                ></Checkbox>
                }
                label={labels.sexualAssault}
              />
              <FormControlLabel
                control={
                  <Checkbox
                  className={classes.reasonButton}
                  onChange={handleChange}
                  checked={bullying}
                  name="bullying"
                  color="primary"
                ></Checkbox>
                }
                label={labels.bullying}
              />
            </FormGroup>
          </ThemeProvider>
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