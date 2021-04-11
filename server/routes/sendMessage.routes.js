/*
*	Coded by: Solomon Paprocki (originally copied from panic.routes.js)
*	Time: Spring 2021 Semester
*	Description: This is the Send Message Button Functionality.  It will send an email to the Support Team Member.
*/

const express = require('express');
const sendMessageController = require('../controllers/sendMessage.controller');

const router = express.Router();
 
router.route('/').post((req, res) => {
    sendMessageController.sendSendMessageEmail(req, res);
});

module.exports = router;