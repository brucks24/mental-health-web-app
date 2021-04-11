/*
*	Coded by: Solomon Paprocki (originally copied from panic.service.js)
*	Time: Spring 2021 Semester
*	Description: This is the Send Message Button Functionality.  It will send an email to the Support Team Member.
*/

import * as sendMessageController from '../controllers/sendMessage.controller';

async function sendMessageEmail(req, res) {
  sendMessageController.sendMessage(req, res);
}

export {
  sendMessageEmail
}