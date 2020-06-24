const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const songSchema = new Schema({
  title: String,
  url: String,
  image_Url: String
}, 
{
  timestamps: true
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;