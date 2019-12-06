const express = require('express')
const router = express.Router()
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

router.post('/', async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.json(createdUser)
    } catch (error) {
        console.log(error)
    }
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