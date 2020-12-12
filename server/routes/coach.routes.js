const express = require('express');
const coachController = require('../controllers/coach.controller');
const router = express.Router();

router.route("/create").post((req, res) => {
    coachController.makeTeam(req, res);
});

router.route("/update").post((req, res) => {
    coachController.updateTeam(req, res);
});

router.route("/:coach").get((req, res) => {
    coachController.getTeams(req, res);
});

router.route("/students").get((req, res) => {
    coachController.getStudents(req, res);
});

module.exports = router;