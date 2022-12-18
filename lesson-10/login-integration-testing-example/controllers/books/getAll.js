const Book = require('../../models/books');

async function getAll(req, res) {
  const {_id} = req.user;
  const {page = 1, limit = 10} = req.query;
  const skip = (parseInt(page) - 1) * parseInt(limit);

  const result = await Book.find({owner: _id}, '-createdAt -updatedAt', {skip, limit})
    .populate('owner', 'name email');

  res.json(result);
}

module.exports = getAll;