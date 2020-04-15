import React, { Fragment } from 'react';
// Import custom components
import MainRouter from '../../routers/routes';
import SuccessSnackbar from '../../components/common/snackbar/SuccessSnackbar';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_SNACKBAR } from '../../redux/types';

function AppContainer(props) {
  const dispatch = useDispatch();
  const { open, message } = useSelector(state => ({
    open: state.UI.successSnackbarOpen,
    message: state.UI.snackbarMessage
  }));

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    dispatch({ type: HIDE_SNACKBAR });
  }

  return (
    <Fragment>
      <SuccessSnackbar open={open} message={message} onClose={handleClose} />
      <MainRouter />
    </Fragment>
  )
}

export default AppContainer;