const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    sender: { type: String }, // id
    recipient: { type: String }, // id
    conversationId: { type: Number }, // id to store between the two users
}, { timestamps: true, collection: 'chat_ids' });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('ChatIds', schema);