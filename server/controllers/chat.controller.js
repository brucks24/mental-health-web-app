const config = require('../config.json');
const db = require('../helpers/db');
const Chat = db.Chat;
const User = db.User;

// Returns all the of the chats for the userId.
function getChats(req, res) {
    return res.json({});
}

// Returns boolean value wheter or not user has new unread chats
function getUnreadChats(userId) {
    return false;
}

// Adds the chat to the database
function sendChat(senderId, receiverId, conversationId, message) {

}

// Marrks the conversation as read
function markAsRead(conversationId) {

}

module.exports = {
    getChats,
    getUnreadChats,
    sendChat,
    markAsRead
};