const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    teamName: { type: String, required: true },
    coach: { type: String },
    description: { type: String },
    members: [String]
}, { collection: 'teams' });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Team', schema);