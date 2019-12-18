import axios from 'axios'

import { sentPanicEmail, sentPanicEmailFailed } from '../actions/userActions'
import { successSnackbar } from '../actions/uiActions';
import { API_URL } from '../config/config'

export const panic = ( user ) => {
    return dispatch => {
        console.log(user)
        axios.post(API_URL + 'users/panic', user).then(res => {
            if (res.data.msg === 'success') {
                dispatch(sentPanicEmail('Email has been sent'))
                dispatch(successSnackbar('Email has successfully sent'))
            } else if (res.data.msg === 'fail') {
                dispatch(sentPanicEmailFailed('Unable to send message, check your connection'))
            }
        })
    }
}