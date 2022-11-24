const http = require("http");

const handlers = {
  '/': (req, res) => {
    res.write("<h2>Home page</h2>");
  },
  '/contacts': (req, res) => {
    res.write("<h2>Contacts page</h2>");
  }
};

const notFoundHandler = (req, res) => {
  res.write("<h2>Not found</h2>");
};

const server = http.createServer((req, res)=>{
  console.log({url: req.url, method: req.method, headers: req.headers});

  res.setHeader('Content-Type', 'text/html');

  const handler = handlers[req.url] || notFoundHandler;

  handler(req, res);

  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});