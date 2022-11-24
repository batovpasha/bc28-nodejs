const fs = require('fs/promises');
const express = require('express');
const moment = require('moment');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(async (req, res, next) => {
  const {method, url} = req;

  const date = moment().format('DD-MM-YYYY_hh:mm:ss');

  await fs.appendFile('server.logs', `\n${method} ${url} ${date}`);

  next();
});

app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware');
  next();
});

app.get('/', (req, res) => {
  console.log({method: req.method, url: req.url});

  res.send("<h2>Home page</h2>");
});

app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).send('Something went wrong!');
});

const PORT = 3000;

app.listen(3000, () => {
  console.log('Server is running on port:', PORT);
});