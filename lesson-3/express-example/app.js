const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log({method: req.method, url: req.url});

  res.send("<h2>Home page</h2>");
});

app.get('/contacts', (req, res) => {
  console.log({method: req.method, url: req.url});

  res.send('<h2>Contacts page</h2>')
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});