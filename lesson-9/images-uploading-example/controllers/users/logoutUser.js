const User = require('../../models/users');

async function logoutUser(req, res) {
  const {_id} = req.user;

  await User.updateOne({_id}, {token: ''});

  res.status(204).json({
    message: 'Logout success'
  });
}

module.exports = logoutUser;