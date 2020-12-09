const config = require('../config.json');
const db = require('../helpers/db');
const Chat = db.Chat;
const User = db.User;

// Returns all the of the chats for the userId.
function getChats(req, res) {
    console.log("Received post!")
    return res.status(200);
}

// Returns boolean value wheter or not user has new unread chats
function getUnreadChats(req, res) {
    return false;
}

// 
function fetchNew(req, res) {
    var newChats = chatController.getUnreadChats(req, res);
    if (newChats) {
        chatController.getChats(req, res);
    }
}

// Adds the chat to the database
function sendChat(req, res) {
    var conversation = req.body.conversation;
    var message = req.body.message;

}

// Marrks the conversation as read
function markAsRead(req, res) {
    var conversation = req.body.conversation;
}

module.exports = {
    getChats,
    getUnreadChats,
    sendChat,
    markAsRead,
    fetchNew
};