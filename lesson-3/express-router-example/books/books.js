const express = require('express');

const router = express.Router();

const books = require('./books.json');

router.get('/', (req, res) => {
  res.json(books);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  console.log({id});

  res.send();
});

module.exports = router;