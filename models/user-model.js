const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate')

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  spotifyId: String,
  spotifyEmail: String,
  display_name: String,
  // images: [Object]
}, 
{
  timestamps: true
});

userSchema.plugin(findOrCreate)

const User = mongoose.model('User', userSchema);
module.exports = User;