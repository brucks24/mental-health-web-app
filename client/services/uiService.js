import { errorSnackbar, infoSnackbar, successSnackbar, warningSnackbar } from '../actions/uiActions'

export const showErrorSnackbar = (message) => {
    return dispatch => {
        dispatch(errorSnackbar(message));
    }
}

export const showInfoSnackbar = (message) => {
    return dispatch => {
        dispatch(infoSnackbar(message));
    }
}

export const showSuccessSnackbar = (message) => {
    return dispatch => {
        dispatch(successSnackbar(message));
    }
}

export const showWarningSnackbar = (message) => {
    return dispatch(warningSnackbar(message));
}