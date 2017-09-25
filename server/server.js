/* Imports
---------------------------------------------------- */
const path = require('path');
const express = require('express');

/* Local Imports
---------------------------------------------------- */

/* Application Config
---------------------------------------------------- */
const publicPath = path.join(__dirname, '../public/');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath));


/* Boot App
---------------------------------------------------- */
app.listen(port, () => {
    console.log(`Open on http://localhost:${port}`);
});


module.exports = {
    app
};