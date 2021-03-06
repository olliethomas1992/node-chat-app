/* Imports
---------------------------------------------------- */
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

/* Local Imports
---------------------------------------------------- */
const { generateMessage, generageLocationMessage } = require('./utils/message');
const { isRealString } = require('./utils/validation');

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
    
    socket.on('join', (params, callback) => {
        if(!isRealString(params.name) || !isRealString(params.room)) {
            callback('Name and room name are required');
        }

        socket.join(params.room);

        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
        socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
        callback();
    });

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