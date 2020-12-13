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

router.route("/students/:teamId").get((req, res) => {
    coachController.getStudentsByTeam(req, res);
});

module.exports = router;