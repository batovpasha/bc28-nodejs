const {writeFile} = require('fs/promises');

writeFile('./text.txt', 'Hello Ukraine!').then(() => {
  console.log('File was written');
});