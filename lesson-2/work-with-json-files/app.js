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

// invokeAction({action: 'getAll'});
// invokeAction({action: 'getById', id: 'zCd_RiowAXnc8Px'});
// invokeAction({action: 'add', title: 'It', author: 'Steven King'});
// invokeAction({action: 'updateById', id: 'lbKS_hCz1ePzivJA3maOw', title: 'Carry', author: 'Steven King'});
// invokeAction({action: 'removeById', id: '7uELPbk8TFAXirKWNzHsZ'});
// invokeAction({action: 'deleteById', id: '7uELPbk8TFAXirKWNzHsZ'});