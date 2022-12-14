const {Schema, model} = require('mongoose');

const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: emailRegexp,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  },
  token: {
    type: String,
    default: ""
  }
}, {
  versionKey: false,
  timestamps: true
});

const User = model('user', userSchema);

module.exports = User;
