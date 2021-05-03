import * as sendMessageController from '../controllers/sendMessage.controller';

async function sendMessageEmail(req, res) {
  sendMessageController.sendMessage(req, res);
}

export {
  sendMessageEmail
}