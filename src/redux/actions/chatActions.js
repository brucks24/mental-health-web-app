import axios from 'axios';
import {setChat} from '../../components/common/drawer/Chatbar'
import {setMessages} from '../../components/common/drawer/Chat'

export const getAllChats = (sender) => (dispatch) => {
    axios.post('chat/fetch/chats', {
        sender: sender,
    }).then(res => {
        setChat(res, sender)
        setMessages(res, sender)
    });
}

export const sendChat = (sender, receiver, message) => (dispatch) => {
    axios.post('chat/send/message', {
        sender: sender,
        receiver: receiver,
        message: message
    }).then(res => {
        setChat(res, sender)
        setMessages(res, sender)
    });
}