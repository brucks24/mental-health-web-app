const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    participants: [ {type: String} ],
    chats: [ {message: String, sender: String, time: Number } ]
}, { timestamps: true, collection: 'chats'});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Chat', schema);