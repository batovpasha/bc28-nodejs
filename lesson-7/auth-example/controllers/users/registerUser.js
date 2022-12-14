const bcrypt = require('bcryptjs');
const { createError } = require('../../helpers');
const User = require('../../models/users');

async function registerUser(req, res) {
  const {name, email, password} = req.body;

  const user = await User.findOne({email});

  if (user) {
    throw createError({status: 409, message: 'Email in use'});
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({name, email, password: hashPassword});

  res.status(201).json({
    name: result.name,
    email: result.email
  });
}

module.exports = registerUser;