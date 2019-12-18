export const errorSnackbar = (message) => {
    return {
        type: 'SHOW_ERROR_SNACKBAR',
        message
    }
}

export const infoSnackbar = (message) => {
    return {
        type: 'SHOW_INFO_SNACKBAR',
        message
    }
}

export const successSnackbar = (message) => {
    return {
        type: 'SHOW_SUCCESS_SNACKBAR',
        message
    }
}

export const warningSnackbar = (message) => {
    return {
        type: 'SHOW_WARNING_SNACKBAR',
        message
    }
}

export const hideSnackbar = () => {
    return {
        type: 'HIDE_SNACKBAR'
    }
}