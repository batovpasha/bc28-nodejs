const books = require('../../models/books');
const {createError} = require('../../helpers');

async function getById(req, res) {
  const {id} = req.params;

  const result = await books.getById({id});

  if (!result) {
    throw createError({status: 404, message: 'Not found'});
  }

  res.json(result);
}

module.exports = getById;