const books = require('../../models/books');

async function getAll(req, res) {
  const result = await books.getAll();

  res.json(result);
}

module.exports = getAll;