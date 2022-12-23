const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./getCurrentUser');
const logoutUser = require('./logoutUser');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resendVerificationEmail = require('./resendVerificationEmail');

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  updateAvatar,
  verify,
  resendVerificationEmail
};