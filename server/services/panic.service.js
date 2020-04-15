import * as panicController from '../controllers/panic.controller';

async function sendPanicEmail(req, res) {
  panicController.panic(req, res);
}

export {
  sendPanicEmail
}