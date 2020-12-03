const express = require('express');
const panicController = require('../controllers/panic.controller');

const router = express.Router();

router.route('/').post((req, res) => {
    panicController.sendPanicEmail(req, res);
});

module.exports = router;