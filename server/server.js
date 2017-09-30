/* Imports
---------------------------------------------------- */
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

/* Local Imports
---------------------------------------------------- */
const { generateMessage, generageLocationMessage } = require('./utils/message');

/* Application Config
---------------------------------------------------- */
const publicPath = path.join(__dirname, '../public/');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

/* Code
---------------------------------------------------- */
io.on('connection', (socket) => {
    console.log('New User Connected');
    
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
    
    socket.on('createMessage', (message, callback) => {
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the Server');
    });
    
    socket.on('createLocationMessage', (coords, callback) => {
        io.emit('newLocationMessage', generageLocationMessage('Admin', coords.latitude, coords.longitude));
    });
    
    socket.on('disconnect', () => {
        console.log('Client Disconnected');
    });
});

/* Boot App
---------------------------------------------------- */
server.listen(port, () => {
    console.log(`Open on http://localhost:${port}`);
});


module.exports = {
    app
};