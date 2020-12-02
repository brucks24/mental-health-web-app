const express = require('express');
const chatController = require('../controllers/chat.controller');

const router = express.Router();

// Fetch all chats for user
router.route('/fetch').post((req, res) => {

});

// Fetch if any new chats are there for the user
router.route('/fetchnew').post((req, res) => {

});



module.exports = router;