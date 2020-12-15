const db = require("../helpers/db");
const User = db.User;
const Team = db.Team;

const makeTeam = (req, res) => {
   let newTeam = new Team({
        teamName: req.body.teamName,
        coach: req.body.coach, 
        description: req.body.description,
    });

    newTeam.save((err, data) => {
        if(err) return console.error(err);
        console.log(data);
    });
};

const updateTeam = (req, res) => {
    let newName = req.body.newname;
    let newDesc = req.body.description;

    if(newDesc === ""){
        newDesc = req.body.olddescription;
    }
    if(newName === ""){
        newName = req.body.oldname;
    }
    Team.findOneAndUpdate({teamName: req.body.oldname, coach: req.body.coach}, {teamName: newName, description: newDesc}, (err, data) => {
        if(err) return console.error(err);
    });
};

const getTeams = (req, res) => {
    Team.find({coach: req.params.coach}, (err, data) => {
        if(err) return console.error(err);
        return res.json(data);
    });
};

const getStudentsByTeam = (req, res) => {
    Team.findById({_id: req.params.teamId}, (err, data) => {
        if(err) return console.error(err);
        return res.json(data.members);
    });
};

const addStudent = (req, res) => {
    Team.findOne({teamName: req.body.teamName}, (err, data) => {
        if(err) return console.error(err);
        data.members.push(req.body.student);
        data.save((err, data) => {
            if(err) return console.error(err);
        });
    });
};

const deleteStudent = (req, res) => {
    Team.findOneAndUpdate({teamName: req.body.teamName}, {$pull: {members: req.body.student}}, (err, data) => {
        if(err) return console.error(err);
    });
};

module.exports = {
    makeTeam,
    updateTeam,
    getTeams,
    getStudentsByTeam,
    addStudent,
    deleteStudent
};