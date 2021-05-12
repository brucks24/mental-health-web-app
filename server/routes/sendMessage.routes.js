const express = require('express');
const sendMessageController = require('../controllers/sendMessage.controller');

const router = express.Router();

//Calls the sendMessageEmail function in sendMessage.controller.js
router.route('/').post((req, res) => {
    sendMessageController.sendMessageEmail(req, res);
});

module.exports = router;