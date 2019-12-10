const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const User = require('../models/Users')


// fullName: { type: String, required: true },
//     email: { type: String, required: true },
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     isAdmin: { type: Boolean }


router.get('/', (req, res) => {
    console.log('GET HTTP method on user resource');
    res.json( { message: "You hit the users GET route!"} )
});

router.post('/register', (req, res) => {
    
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: req.body.password,
                    isAdmin: req.body.isAdmin
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })

});

router.post('/login', async (req, res) => {

    // will look to findUser in the database
    // it may send JSON that username or password is incorrect
    // for either incorrect password or username

    // find if the user exits
    try {
        const foundUser = await User.findOne({ username: req.body.username });
        console.log(req.body);
        // if User.findOne returns null/ or undefined it won't throw an error
        console.log(foundUser);
        if (foundUser) {

            if (bcrypt.compareSync(req.body.password, foundUser.password)) {

                console.log(foundUser);
                req.session.username = foundUser.username;
                req.session.logged = true;

                res.redirect('/posts')


            } else {
                return res.status(401).json({ message: 'Username or password is incorrect' })
            }


        } else {
            return res.status(401).json({ message: 'Username or password is incorrect' })
        }

    } catch (err) {
        res.send(err);
    }

});

router.get('/logout', (req, res) => {

    // we will destroy the session here
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            return res.status(201).json({ logout: "user has successfully logged out" })
        }
    })

});

router.put('/:userId', async (req, res) => {
    console.log(req.body)
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true
    })
    res.json(updatedUser)
});

router.delete('/:userId', (req, res) => {
    return console.log(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});

module.exports = router