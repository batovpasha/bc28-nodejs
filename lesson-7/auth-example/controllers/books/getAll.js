const Book = require('../../models/books');

async function getAll(req, res) {
  const result = await Book.find({}, '-createdAt -updatedAt');

  res.json(result);
}

module.exports = getAll;