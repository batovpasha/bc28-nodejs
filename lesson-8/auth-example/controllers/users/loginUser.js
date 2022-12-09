const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {createError} = require('../../helpers');
const User = require('../../models/users');

const {JWT_SECRET_KEY} = process.env;

async function loginUser(req, res) {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if (!user) {
    throw createError({status: 401, message: 'Email or password wrong'});
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw createError({status: 401, message: 'Email or password wrong'});
  }

  const payload = {
    id: user._id
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: '1d'});

  await User.findByIdAndUpdate(user._id, {token});

  res.json({token});
}

module.exports = loginUser;