const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;
require('./config/db');

// controllers
// const userController = require('./controllers/users');


// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.json());


// URL prefix
// app.use('/auth', userController);