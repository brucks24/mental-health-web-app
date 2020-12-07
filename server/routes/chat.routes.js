const express = require('express');
const chatController = require('../controllers/chat.controller');

const router = express.Router();

// Fetch all chats for user
router.route('/fetch').post((req, res) => {
    chatController.getChats(req, res)
});

// Checks for new messages, if there are new messages it loads the messages.
router.route('/fetchnew').post((req, res) => {
    var newChats = chatController.getUnreadChats(req, res);
    if (newChats) {
        chatController.getChats(req, res);
    }
});

// Sends message to designated user
router.route('/sendmsg').post((req, res) => {
    var conversation = req.body.conversation;
    var message = req.body.message;

    chatController.sendChat(sender, receiver, conversation, message);
});

// Marks all messages in the chat to be read
router.route('/markread').post((req, res) => {
    var conversation = req.body.conversation;
    chatController.markAsRead(conversation);
});


module.exports = router;

/*
    POST /chat/fetch -- Fetches all chats for the user
        - You need to pass the userId for this method to work.
        - The method will return the following
            - A JSON object of each chat in chronological order and not sorted by conversation.
    POST /fetchnew -- Fetches all chats for the user if there are new messages
        - You need to pass the userId for this method to work
        - The method will return the following
            - A JSON object of each chat in chronological order and not sorted by conversation.
    POST /chat/sendmsg -- Adds a new message to the database
        - You need to pass the following:
            - conversation - the conversation id 
        - The method will return the following:
            - A JSON object of each chat in chronological order and not sorted by conversation.
    POST /chat/markread -- Marks the conversation/messages as read
        - You need to pass the following
            - conversation - the conversation id
*/