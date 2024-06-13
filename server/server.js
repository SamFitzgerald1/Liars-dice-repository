const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require('cors');
const chatSocket = require('./socketListeners/chatListeners');

app.use(cors);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    chatSocket(socket);
});

server.listen(3000, () => {
    console.log('server listening on port 3000');
});