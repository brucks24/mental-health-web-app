import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import useStyles from './styles'
import { connect } from 'react-redux';
import * as userService from '../../../../services/userService'
import * as uiService from '../../../../services/uiService'
import { bindActionCreators } from 'redux'
import store from '../../../../store/configureStore';
import { showSnackbar } from '../../../../actions/uiActions'

const theme = createMuiTheme({
  palette: {
    primary: red
  }
})

function PanicButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleSnackbarToggle = props

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleConfirm = () => {
    const userInfo = {
      name: props.name,
      email: props.email
    }
    props.actions.panic(userInfo)
    console.log('SIDEBAR--', props)
    props.handleSnackbarToggle
    setOpen(false)
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
          Panic Button
                </Button>
      </ThemeProvider>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to do this?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Click "I understand" ONLY if any of the following apply to you:
                        <ul>
              <li>Thoughts of suicide</li>
              <li>Thoughts of homicide</li>
              <li>Concern regarding sexual abuse</li>
              <li>Concern regarding hazing</li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Nevermind</Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>I understand</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, userService), dispatch),
  ui: bindActionCreators(Object.assign({}, uiService), dispatch),
})

export default connect(null, mapDispatchToProps)(PanicButton)