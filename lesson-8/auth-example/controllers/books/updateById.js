const Book = require('../../models/books');
const {createError} = require('../../helpers');

async function updateById(req, res) {
  const {id} = req.params;
  const {title, author, favorite, genre, isbn} = req.body;

  const result = await Book.findByIdAndUpdate(id, {
    title,
    author,
    favorite,
    genre,
    isbn
  }, {new: true});

  if (!result) {
    throw createError({status: 404, message: 'Not Found'});
  }

  res.status(201).json(result);
}

module.exports = updateById;