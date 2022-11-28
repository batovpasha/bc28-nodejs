const books = require('../../models/books');
const {createError} = require('../../helpers');

async function removeById(req, res) {
  const {id} = req.params;

  const result = await books.removeById({id});

  if (!result) {
    throw createError({status: 404, message: 'Not Found'});
  }

  res.status(204).send();
}

module.exports = removeById;