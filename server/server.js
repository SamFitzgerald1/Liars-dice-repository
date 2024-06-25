const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
const bodyParser = require('body-parser');

const roomRouter = require('./routes/room');

const chatSocket = require('./socketListeners/chatListeners');
const room = require('./socketListeners/roomListeners');

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'PUT', 'DELETE']
}));

app.use(bodyParser.json());

app.use('/room', roomRouter);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173'
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    chatSocket(socket);
    room(socket);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dgdev');

const db = mongoose.connection;
db.on('error', e => console.error(e));

server.listen(3000, () => {
    console.log('server listening on port 3000');
});