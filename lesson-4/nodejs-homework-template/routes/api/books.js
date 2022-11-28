const express = require('express');
const Joi = require('joi');

const books = require('../../models/books');
const {createError} = require('../../helpers/createError');

const router = express.Router();

const addBooksSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required()
});

router.get('/', async (req, res, next) => {
  try {
    const result = await books.getAll();

    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;

    const result = await books.getById({id});

    if (!result) {
      throw createError({status: 404, message: 'Not found'});
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {error} = addBooksSchema.validate(req.body);

    if (error) {
      throw createError({status: 400, message: error.message})
    }

    const {title, author} = req.body;

    const result = await books.add({title, author});

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const {error} = addBooksSchema.validate(req.body);

    if (error) {
      throw createError({status: 400, message: error.message})
    }

    const {id} = req.params;
    const {title, author} = req.body;

    const result = await books.updateById({id, title, author})

    if (!result) {
      throw createError({status: 404, message: 'Not Found'});
    }

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;

    const result = await books.removeById({id});

    if (!result) {
      throw createError({status: 404, message: 'Not Found'});
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;