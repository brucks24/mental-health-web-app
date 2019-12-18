var initialState = {
    message: null,
}

const userReducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'PANIC_EMAIL_SENT':
            return Object.assign({}, state, {
                message: action.data
            });
        
        case 'PANIC_EMAIL_SENT_FAILED':
            return Object.assign({}, state, {
                message: "Unable to send response, check your connection"
            });
            
        default:
            return state;
    }
}

export default userReducer