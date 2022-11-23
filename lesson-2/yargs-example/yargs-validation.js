const yargs = require('yargs');
const {hideBin} = require('yargs/helpers');

const result = yargs(hideBin(process.argv))
  .option('action', {
    alias: 'a',
    type: 'string',
    choices: ['getAll', 'getById', 'add', 'updateById', 'removeById'],
  })
  .option('author', {
    alias: 'a',
    type: 'string',
    description: 'A book author'
  })
  .option('id', {
    alias: 'i',
    type: 'number',
    description: 'A book ID',
  })
  .parseSync();

console.log(result);