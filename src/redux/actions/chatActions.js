import axios from 'axios';
import {setChat} from '../../components/common/drawer/Chatbar'
import {setMessages} from '../../components/common/drawer/Chat'

export const getAllChats = (sender) => {
    return new Promise((resolve, reject) => {
        axios.post('chat/fetch/chats', {
            sender: sender,
        }).then(res => {
            resolve(res, sender);
        });
    });
}

export function getChats(sender, receiver) {
    return new Promise((resolve, reject) => {
        axios.post('chat/fetch/chat', {
            sender: sender,
            receiver, receiver
        }).then(res => {
            resolve(res, sender);
        })
    });

}

export function sendChat(sender, receiver, message) {
    return new Promise((resolve, reject) => {
        axios.post('chat/send/message', {
            sender: sender,
            receiver: receiver,
            message: message
        }).then(res => {
            resolve(res, sender);
        });
    });
}