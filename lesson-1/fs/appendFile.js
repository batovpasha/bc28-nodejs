const {appendFile} = require('fs/promises');

appendFile('./text.txt', '\nHello Ukraine!').then(() => {
  console.log('File was written');
});