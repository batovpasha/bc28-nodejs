const {readFile} = require('fs').promises;

readFile('./text.txt', 'utf-8').then((data) => {
  console.log(data);
});