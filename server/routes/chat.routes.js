const express = require('express');
const chatController = require('../controllers/chat.controller');

const router = express.Router();

// Fetch all chats for user
router.route('/fetch/chats').post((req, res) => {
    chatController.getChats(req, res)
});


// Sends message to designated user
router.route('/send/message').post((req, res) => {
    chatController.sendChat(req, res);
});


module.exports = router;