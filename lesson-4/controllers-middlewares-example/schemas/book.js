const Joi = require('joi');

const addBooksSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required()
});

module.exports = {
  addBooksSchema
};