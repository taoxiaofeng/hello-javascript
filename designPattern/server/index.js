const { resolve } = require('path');
const express = require('express');
const app = express();

// console.log(`__dirname: `, resolve(__dirname.slice(0,-7) + '/modules'));

app.use('/', express.static(resolve(__dirname.slice(0,-7) + '/modules')));

app.listen(3333,() => console.log('Server running on port 3333'));
