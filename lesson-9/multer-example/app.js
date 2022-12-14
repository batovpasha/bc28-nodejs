const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs/promises');
const crypto = require('crypto');

const app = express();

app.use(cors());
app.use(express.static('public'));

const tempDir = path.join(__dirname, 'temp');

const storage = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage
});

const books = [];

app.get('/api/books', async (req, res) => {
  res.json(books);
});

const booksDir = path.join(__dirname, 'public', 'books');

app.post('/api/books', upload.single('cover'), async (req, res) => {
  try {
    const {path: tempPath, originalname} = req.file;
    const booksPath = path.join(booksDir, originalname);

    await fs.rename(tempPath, booksPath);

    const cover = path.join('books', originalname);
    const newBook = {
      id: crypto.randomUUID(),
      title: req.body.title,
      cover
    };

    books.push(newBook);

    res.status(201).json(newBook);
  } catch (err) {
    console.error(err);

    await fs.unlink(req.file.path);

    res.status(500).json({message: 'Failed to upload an image'});
  }
});

const PORT = 3000;

app.listen(PORT, () => console.log('Server is running on port:', PORT));