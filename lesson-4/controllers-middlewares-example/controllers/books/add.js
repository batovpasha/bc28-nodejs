const books = require('../../models/books');

async function add(req, res) {
  const {title, author} = req.body;

  const result = await books.add({title, author});

  res.status(201).json(result);
}

module.exports = add;