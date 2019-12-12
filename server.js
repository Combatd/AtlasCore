const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const methodOverride = require('method-override');
const session = require('express-session');

const PORT = process.env.PORT || 8000;
require('./config/db');


// session control
app.use(session({
    secret: "this is a random secret string", 
    resave: false, 
    saveUninitialized: false 
    
}));



// controllers
const userController = require('./controllers/users');
const ticketController = require('./controllers/tickets');
const commentController = require('./controllers/comments.js');

// static files
// app.use(express.static(path.join(__dirname, 'frontend' ,'build')));
// app.use(cors);
app.use(express.json());


// middleware
app.use(methodOverride('_method')); // must become before routes
app.use(express.urlencoded({ extended: false }));


// URL prefix
app.use('/api/v1/users', userController);
app.use('/api/v1/tickets', ticketController);
app.use('/api/v1/', commentController);

app.get('/api/v1/hello', (req, res) => {
    res.json({
        message: 'world'
    });
});


// app.get('/*', (req, res) => {
//     res.sendfile(path.join(__dirname, 'frontend', 'build', 'index.html'));
// });

app.get('/*', (req, res) => {
    res.json({
        message: 'page not found',
        php: 'no'
    });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});