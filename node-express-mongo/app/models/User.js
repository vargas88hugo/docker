const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  city: {
    type: String,
  },
});

module.exports = User = mongoose.model('User', UserSchema);
