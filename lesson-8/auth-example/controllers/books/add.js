const Book = require('../../models/books');

async function add(req, res) {
  const {title, author, favorite, genre, isbn} = req.body;
  const {_id} = req.user;

  const result = await Book.create({
    title,
    author,
    favorite,
    genre,
    isbn,
    owner: _id
  });

  res.status(201).json(result);
}

module.exports = add;