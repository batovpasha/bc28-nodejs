const {program} = require('commander');
const books = require('./books');

async function invokeAction({action, id, title, author}) {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAll();
      console.log(allBooks);
      break;
    case "getById":
      const book = await books.getById({id});
      console.log(book);
      break;
    case "add":
      const newBook = await books.add({title, author});
      console.log(newBook);
      break;
    case "updateById":
      const updatedBook = await books.updateById({id, title, author});
      console.log(updatedBook);
      break;
    case "removeById":
      const deletedBook = await books.removeById({id});
      console.log(deletedBook);
      break;
    default:
      console.log('Unknown action');
  }
}

program
  .option('-a, --action <type>', 'An action to invoke', 'getAll')
  .option('-i, --id <type>', 'An ID of a book')
  .option('-t, --title <type>', 'A book title')
  .option('-at, --author <type>', 'A book author');

program.parse();

const options = program.opts();

invokeAction(options);
