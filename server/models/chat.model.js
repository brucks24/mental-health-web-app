const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  sender: { type: String },
  recipient: { type: String },
}, { timestamps: true });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Chat', schema);