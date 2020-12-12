import { CLEAR_ERRORS } from '../types';
import { setChat } from '../../components/common/drawer/Chatbar'
import { setMessages } from '../../components/common/drawer/Chat';
import axios from 'axios';

export const getUserChats = (sender, receiver) => (dispatch) => {
    axios.post('chat/fetch/convoid', {
        sender: sender,
        receiver: receiver
    }).then(res => {
        dispatch({ type: CLEAR_ERRORS });
        axios.post('chat/fetch/chats', {
            convo_id: res.data.id
        }).then(res => {
            setMessages(res.data.chats);
        })
    });
}

export const getConvoId = (sender, receiver) => {
    axios.post('chat/fetch/convoid', {
        sender: sender,
        receiver: receiver
    }).then(res => {
        return res.data.id;
    });
}

export const getUserConvos = (user) => (dispatch) => {
    axios.post('chat/fetch/convos', {
        user: user
    }).then(res => {
        loadConvosToPage(res, user);
    });
}

export const sendUserMessage = (sender, receiver, msg) => (dispatch) => {
    console.log(sender + " -- " + receiver)
    axios.post('chat/sendmsg', {
        sender: sender,
        receiver: receiver,
        msg: msg
    }).then(res => {
        getUserConvos(sender);
        getUserChats();
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
function loadConvosToPage(convos, user) {
    setChat(convos, user)
}

// Takes in array of chats for one covno.
function loadChatsToPage(chats) {
    setMessages(chats)
}