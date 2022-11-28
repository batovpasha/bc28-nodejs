const books = require('../../models/books');
const {createError} = require('../../helpers');

async function updateById(req, res) {
  const {id} = req.params;
  const {title, author} = req.body;

  const result = await books.updateById({id, title, author})

  if (!result) {
    throw createError({status: 404, message: 'Not Found'});
  }

  res.status(201).json(result);
}

module.exports = updateById;