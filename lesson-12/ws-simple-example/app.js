const ws = require('ws');

const wsServer = new ws.Server({port: 3000});

const sockets = [];

wsServer.on('connection', (socket) => {
  sockets.push(socket);

  console.log('New client was successfully connected');

  // setInterval(() => {
  //   socket.send("Hello world!");
  // }, 3000);

  sockets.forEach(item => {
    if (item !== socket) {
      item.send('New used was connected');
    }
  });

  socket.on('message', message => {
    const data = JSON.parse(message.toString('utf-8'));
  });
});