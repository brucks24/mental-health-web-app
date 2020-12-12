import { LOADING_CHATS, CLEAR_ERRORS, LOAD_CHATS } from '../types';
import { setChat } from '../../components/common/drawer/Chatbar'
import axios from 'axios';

export const getUserChats = () => (dispatch) => {
    axios.post('chat/fetch/chats').then(res => {
        // todo load chats into box.
    })
}

export const getUserConvos = (user) => (dispatch) => {
    axios.post('chat/fetch/convos', {
        user: user
    }).then(res => {
        loadChatsToPage(res);
    });
}

export const sendUserMessage = (sender, receiver, msg) => (dispatch) => {
    axios.post('chat/sendmsg', {
        sender: sender,
        receiver: receiver,
        msg: msg
    }).then(res => {
        loadChatsToPage(res);
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

// Takes in an array of convos and loads them to the inbox page.
function loadChatsToPage(convos) {
    setChat(convos)
}