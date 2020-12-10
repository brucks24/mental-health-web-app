const config = require('../config.json');
const db = require('../helpers/db');
const Chat = db.Chat;
const ChatIds = db.ChatIds;
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

// This might not be a useful thingy. Gonna have to take a peak at it.
function fetchNew(req, res) {
    var newChats = chatController.getUnreadChats(req, res);
    if (newChats) {
        chatController.getChats(req, res);
    }
}

// Returns the conversation id that is between the two users.
function getConversationId(sender, receiver) {
    ChatIds.findOne({user_one: sender, user_two: receiver}, (convo) => {
        if (convo == null) {
            ChatIds.findOne({user_one: receiver, user_two: sender}, (convo) => {
                if (convo == null) {
                    // new convo.
                } else {
                    return convo.conversationId;
                }
            });
        } else {
            return convo.conversationId;
        }
    });
}

// Adds the chat to the database
function sendChat(req, res) {
    var conversation = req.body.conversation;
    var message = req.body.message;
    const chat = new Chat({
        message: message,
        conversationId: conversation,
        isRead: false
    })
    chat.save();

    // TODO: Reload the data and reload the chatbox with the updated chats.
}

// Marks the conversation as read
function markAsRead(req, res) {
    var conversation = req.body.conversation;
    Chat.updateMany({ conversationId: conversation }, { $set: { isRead: true } }, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = {
    getChats,
    getUnreadChats,
    sendChat,
    markAsRead,
    fetchNew
};