const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { createError } = require('../../helpers');
const User = require('../../models/users');

async function registerUser(req, res) {
  const {name, email, password} = req.body;

  const user = await User.findOne({email});

  if (user) {
    throw createError({status: 409, message: 'Email in use'});
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email, {protocol: 'https'});

  const result = await User.create({name, email, password: hashPassword, avatarURL});

  res.status(201).json({
    name: result.name,
    email: result.email
  });
}

module.exports = registerUser;