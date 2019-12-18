import React from 'react'
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import { bindActionCreators } from 'redux';
import * as uiActions from '../../../actions/uiActions'
import { connect } from 'react-redux';

export function DefaultSnackbar(props) {
  // const dispatch = useDispatch()

  // const { open, message } = useSelector(
  //   state => state.ui
  // )
  const { open, message } = props;

  function handleClose() {
    open = false;
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={4000}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          <Icon>check_circle</Icon>
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Icon>close</Icon>
        </IconButton>
      ]}
    />
  );
}

const mapStateToProps = state => ({
  //open: state.ui.open,
  //message: state.ui.message
})

const mapDispatchToProps = dispatch => ({
  ui: bindActionCreators(Object.assign({}, uiActions), dispatch)
})

export default connect(null, mapDispatchToProps)(DefaultSnackbar)