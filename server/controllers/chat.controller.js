const config = require('../config.json');
const db = require('../helpers/db');
const Chat = db.Chat;
const User = db.User;

function getChats(req, res) {
    let chats = [];

    const userId;

    const sentChats = Chat.find(userId); // get the cahts from the database
    const received




    return chats;
}