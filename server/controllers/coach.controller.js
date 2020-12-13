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

const getStudents = (req, res) => {
    User.find({accountType: 0}, (err, data) => {
        if(err) return console.error(err);
        return res.json(data);
    });
};

module.exports = {
    makeTeam,
    updateTeam,
    getTeams,
    getStudents
};