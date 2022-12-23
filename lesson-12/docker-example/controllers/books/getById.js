const Book = require('../../models/books');
const {createError} = require('../../helpers');

async function getById(req, res) {
  const {id} = req.params;
  const {_id} = req.user;

  const result = await Book.find({_id: id, owner: _id});

  if (!result) {
    throw createError({status: 404, message: 'Not found'});
  }

  res.json(result);
}

module.exports = getById;