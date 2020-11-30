const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    message: { type: String }, // plain text message
    conversationId: { type: Number }, // id to store between the two users
}, { timestamps: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Chat', schema);