import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SHOW_SUCCESS_SNACKBAR,
  HIDE_SNACKBAR
} from '../types';

const initialState = {
  loading: false,
  errors: null,
  successSnackbarOpen: false,
  snackbarMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false
      };
    case SHOW_SUCCESS_SNACKBAR:
      return {
        ...state,
        successSnackbarOpen: true,
        snackbarMessage: action.payload,
      }
    case HIDE_SNACKBAR: {
      return {
        ...state,
        successSnackbarOpen: false,
        snackbarMessage: null,
      }
    }
    default:
      return state;
  }
}