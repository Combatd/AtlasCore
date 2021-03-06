const express = require('express');
const router = express.Router();

const Ticket = require('../models/tickets');
const Comment = require('../models/comments');




router.post('/tickets/:id/comments', (req, res) => {
    Comment.create(req.body, (err, createdComment) => {
        if(err) {
            console.log(err)
            res.json(err);
        } else {
            console.log(req.body)
            console.log(req.params)

            Ticket.findById(req.params.id, (err, foundTicket) => {

                if(err) {
                    console.log(err)
                    res.send(err)
                } else {
                    
                    foundTicket.comments.push(createdComment)

                    // update the Ticket in the database
                    foundTicket.save( (err, savedTicket) => {
                        console.log(savedTicket)
                    })

                    res.redirect(`/tickets/${foundTicket._id}`)
                }

            })
        }
    })

});


module.exports = router;