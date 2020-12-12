const express = require('express');
const chatController = require('../controllers/chat.controller');

const router = express.Router();

// Fetch all chats for user
router.route('/fetch/chats').post((req, res) => {
    chatController.getChats(req, res)
});

// Fetch all convos for a user
router.route('/fetch/convos').post((req, res) => {
    chatController.getConvos(req, res);
});

// Checks for new messages, if there are new messages it loads the messages.
router.route('/fetchnew').post((req, res) => {
    chatController.fetchNew(req, res);
});

// Sends message to designated user
router.route('/sendmsg').post((req, res) => {
    chatController.sendChat(req, res);
});

// Marks all messages in the chat to be read
router.route('/markread').post((req, res) => {
    chatController.markAsRead(req, res);
});

router.route('/fetch/convoid').post((req, res) => {
    chatController.getConvoId(req, res);
});

module.exports = router;