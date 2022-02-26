var express = require('express');
var app = express();
var http = require('http');
var { Server } = require('socket.io');
var server = http.createServer(app);
var io = new Server(server);

/* io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
}) */

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})