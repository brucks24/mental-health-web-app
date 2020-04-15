import { GET_USER_DATA, LOADING_DATA, SET_ERRORS, STOP_LOADING_UI, CLEAR_ERRORS } from '../types';
import axios from 'axios';

export const getUserData = (userId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get(`/user/${userId}`).then(res => {
    dispatch({
      type: GET_USER_DATA,
      payload: res.data
    });
  }).catch(err => {
    dispatch({ type: STOP_LOADING_UI });
    dispatch({
      type: SET_ERRORS,
      payload: err.message
    })
  })
}

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
}