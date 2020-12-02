const config = require('../config.json');
const db = require('../helpers/db');
const Chat = db.Chat;
const User = db.User;

// Returns all the of the chats for the userId.
function getChats(userId) {
    let chats = [];

    return chats;
}

// Returns boolean value wheter or not user has new unread chats
function getUnreadChats(userId) {
    return false;
}