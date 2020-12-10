const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    hash: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    accountType: { type: Number, required: true }
}, { collection: 'users'});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);