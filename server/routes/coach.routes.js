const express = require('express');
const coachController = require('../controllers/coach.controller');
const router = express.Router();

router.route("/create").post((req, res) => {
    coachController.makeTeam(req, res);
});

module.exports = router;