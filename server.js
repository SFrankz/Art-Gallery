
const WebSocket = require('ws');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const wss = new WebSocket.Server({ noServer: true });

//ws connection settings
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send('Server received your message: ' + message);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

//pic endpoint
app.get('/api/pictures', (req, res) => {
  const picturesData = fs.readFileSync('./pictures.json');
  res.status(200).json(JSON.parse(picturesData));
});

//server start
const server = app.listen(8080, () => {
  console.log('WebSocket server is running on port 8080');
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit('connection', socket, request);
  });
});
