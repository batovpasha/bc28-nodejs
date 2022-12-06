const bcrypt = require('bcryptjs');
const {createError} = require('../../helpers');
const User = require('../../models/users');

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

  // Will explain in the next lecture
  const token = 'kansdlkjfnakdslnfkjadsnfk';

  res.json({token});
}

module.exports = loginUser;