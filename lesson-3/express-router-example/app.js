const express = require('express');

const app = express();

const booksRouter = require('./books/books.js');

app.use('/api/v1/books', booksRouter);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found'
  });
});

const PORT = 3000;

app.listen(PORT);