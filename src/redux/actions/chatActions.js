import { LOADING_CHATS, CLEAR_ERRORS, LOAD_CHATS } from '../types';
import { setChat } from '../../components/common/drawer/Chatbar'
import axios from 'axios';

export const getUserChats = () => (dispatch) => {
    dispatch({ type: LOADING_CHATS });
    axios.post('chat/fetch').then(res => {
        loadChatsToPage(res.data.chats);
    })
}

export const sendUserMessage = () => (dispatch) => {
    axios.post('chat/sendmsg').then(res => {
        loadChatsToPage(res.data.chats);
    });
}

export const markMessageRead = () => (dispatch) => {
    axios.post('chat/markread').then(res => {
        loadChatsToPage(res.data.chats);
    });
}

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

// Takes in an array of chat message and loads them to the page.
function loadChatsToPage(chats) {
    setChat(chats)
}