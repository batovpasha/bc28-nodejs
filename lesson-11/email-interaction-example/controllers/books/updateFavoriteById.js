const Book = require('../../models/books');
const {createError} = require('../../helpers');

async function updateFavoriteById(req, res) {
  const {id} = req.params;
  const {favorite} = req.body;

  const result = await Book.findByIdAndUpdate(id, {
    favorite,
  }, {new: true});

  if (!result) {
    throw createError({status: 404, message: 'Not Found'});
  }

  res.status(200).json(result);
}

module.exports = updateFavoriteById;