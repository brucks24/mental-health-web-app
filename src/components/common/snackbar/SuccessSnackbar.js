import React from 'react';
import {
  Snackbar,
  makeStyles,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function SuccessSnackbar(props) {
  const classes = useStyles();
  const { open, message, onClose } = props;

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => onClose()}>
        <Alert onClose={() => onClose()} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}