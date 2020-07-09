const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const journalEntrySchema = new Schema({
  entry: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'} // <== !!!

}, 
{
  timestamps: true
});

const journalEntry = mongoose.model('journalEntry', journalEntrySchema);
module.exports = journalEntry;