const db = require("../helpers/db");
const User = db.User;
const Team = db.Team;

const makeTeam = (req, res) => {
    console.log('Test')
    let newTeam = new Team({
        teamName: req.params[teamname],
        coach: req.params[coach], 
        description: req.params[description],
    });

    newTeam.save((err, data) => {
        if(err) return console.error(err);
        console.log(data);
    });
};

module.exports = {
    makeTeam
};