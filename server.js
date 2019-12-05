const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;
require('./config/db');

// controllers
// const userController = require('./controllers/users');
const ticketController = require('./controllers/tickets');

// static files
// app.use(express.static(path.join(__dirname, 'frontend' ,'build')));
app.use(express.json());


// middleware
app.use(methodOverride('_method')); // must become before routes
app.use(express.urlencoded({ extended: false }));


// URL prefix
// app.use('/api/v1/auth', userController);
app.use('/api/v1/tickets', ticketController);


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