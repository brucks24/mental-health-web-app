import { LOADING_CHATS, CLEAR_ERRORS, LOAD_CHATS } from '../types';
import axios from 'axios';

export const getUserChats = () => (dispatch) => {
    dispatch({ type: LOADING_CHATS });
        axios.post('chat/fetch').then(res => {
            // TODO: set data on page to the res.
        })
}

export const sendUserMessage = () => (dispatch) => {
    axios.post('chat/sendmsg').then(res => {

    });
}

export const markMessageRead = () => (dispatch) => {
    axios.post('chat/markread').then(res => {

    });
}

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};