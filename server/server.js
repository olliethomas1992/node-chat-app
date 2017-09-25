/* Imports
---------------------------------------------------- */
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

/* Local Imports
---------------------------------------------------- */

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