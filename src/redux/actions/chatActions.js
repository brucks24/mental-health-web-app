import { LOADING_CHATS, CLEAR_ERRORS, LOAD_CHATS } from '../types';
import axios from 'axios';

export const getUserChats = () => (dispatch) => {
    dispatch({ type: LOADING_CHATS });
    try {
        axios.post('chat/fetch').then(res => {
            console.log('oki!');
        })
    } catch (err) {
        console.log(err);
    }
}

export const sendUserMessage = () => (dispatch) => {
    axios.post('chat/sendmsg');
}

export const markMessageRead = () => (dispatch) => {
    axios.post('chat/markread');
}

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};