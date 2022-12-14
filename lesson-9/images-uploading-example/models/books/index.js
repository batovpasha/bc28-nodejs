const {Schema, model} = require('mongoose');

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  favorite: {
    type: Boolean,
    default: false
  },
  genre: {
    type: String,
    enum: ['fantastic', 'love']
  },
  isbn: {
    type: String,
    match: /[0-9]{3}-[0-9]{1}-[0-9]{2}-[0-9]{6}-[0-9]{1}/,
    required: true,
    unique: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});

const Book = model('book', bookSchema);

module.exports = Book;
