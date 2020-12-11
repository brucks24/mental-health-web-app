const db = require("../helpers/db");
const User = db.User;
const Team = db.Team;

const makeTeam = (req, res) => {
    //console.log(req.body);
   let newTeam = new Team({
        teamName: req.body.teamname,
        coach: req.body.coach, 
        description: req.body.description,
    });

    newTeam.save((err, data) => {
        if(err) return console.error(err);
        console.log(data);
    });
};

module.exports = {
    makeTeam
};