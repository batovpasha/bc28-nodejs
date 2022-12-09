async function getCurrentUser(req, res) {
  const {name, email} = req.user;

  res.json({
    name,
    email
  });
}

module.exports = getCurrentUser;