const express = require('express');
const coachController = require('../controllers/coach.controller');
const router = express.Router();

router.route("/create").post((req, res) => {
    console.log('Test')
    coachController.makeTeam(req, res);
});

module.exports = router;