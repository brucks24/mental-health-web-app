const config = require('../config.json');
const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

console.log(config.connectionString);
if (config.connectionString != null) {
    console.log(process.env.APP_HOST);
    mongoose.connect(config.connectionString, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log(colors.green('Database connected'));
    }).catch(err => {
        console.log(colors.red(err.message));
    });
    mongoose.Promise = global.Promise;

    module.exports = {
        User: require('../models/user.model'),
        Chat: require('../models/chat.model'),
        ChatIds: require('../models/chatIds.model'),
        Team: require('../models/team.model')
    }
} else {
    console.log(colors.yellow('You must add dbConfig.json to the server folder'));
}