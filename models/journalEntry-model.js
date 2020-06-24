const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const journalEntrySchema = new Schema({
  entry: [String],
  date: new Date ()
}, 
{
  timestamps: true
});

const journalEntry = mongoose.model('journalEntry', journalEntrySchema);
module.exports = journalEntry;