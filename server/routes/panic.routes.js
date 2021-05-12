const express = require('express');
const panicController = require('../controllers/panic.controller');

const router = express.Router();

//Calls the sendPanicEmail function in panic.controller.js
router.route('/').post((req, res) => {
    panicController.sendPanicEmail(req, res);
});

module.exports = router;