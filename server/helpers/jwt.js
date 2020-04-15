const expressJwt = require('express-jwt');
const config = require('../config.json');
const userService = require('../services/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/api/user/login',
            '/api/user/register'
        ]
    });
}

function isRevoked(req, payload, done) {
    userService.getById(payload.sub).then(user => {
        if (!user) {
            return done(null, true);
        }

        // revoke token if user no longer exists
        done();
    }).catch(err => {
        console.log(err);
    });

};