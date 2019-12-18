var initialState = {
    open: true,
    snackbarVariant: null,
    message: null,
}

const uiReducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'SHOW_ERROR_SNACKBAR':
            return Object.assign({}, state, {
                open: true,
                snackbarVariant: 'error',
                message: action.message
            })

        case 'SHOW_INFO_SNACKBAR':
            return Object.assign({}, state, {
                open: true,
                snackbarVariant: 'info',
                message: action.message
            })

        case 'SHOW_SUCCESS_SNACKBAR':
            return Object.assign({}, state, {
                open: true,
                snackbarVariant: 'success',
                message: action.message
            })

        case 'SHOW_WARNING_SNACKBAR':
            return Object.assign({}, state, {
                open: true,
                snackbarVariant: 'warning',
                message: action.message
            })

        default:
            return state
    }
}