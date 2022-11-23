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

const actionIndex = process.argv.indexOf("--action");

if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];

  invokeAction({action})
}
