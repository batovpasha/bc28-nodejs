const fs = require('fs/promises');
const path = require('path');
const {nanoid} = require('nanoid');

/**
 * TODO:
 * 1. Get all books
 * 2. Get by ID
 * 3. Add new book
 * 4. Update by ID
 * 5. Remove by ID
 */

const booksPath = path.join(__dirname, 'books.json');

async function getAll() {
  const data = await fs.readFile(booksPath, 'utf8');

  return JSON.parse(data);
}

async function getById({id}) {
  const books = await getAll();

  const result = books.find(item => item.id === id);

  if (!result) {
    return null;
  }

  return result;
}

async function add({title, author}) {
  const books = await getAll();

  const newBook = {
    id: nanoid(),
    title,
    author
  };

  books.push(newBook);

  await updateBooks(books);

  return newBook;
}

async function updateBooks(newBooks) {
  await fs.writeFile(booksPath, JSON.stringify(newBooks, null, 2));
}

async function updateById({id, title, author}) {
  const books = await getAll();

  const index = books.findIndex(item => item.id === id);

  if (index === -1) {
    return null;
  }

  books[index] = {id, title, author};

  await updateBooks(books);

  return books[index];
}

async function removeById({id}) {
  const books = await getAll();

  const index = books.findIndex(item => item.id === id);

  if (index === -1) {
    return null;
  }

  const [result] = books.splice(index, 1);

  await updateBooks(books);

  return result;
}

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  removeById
};