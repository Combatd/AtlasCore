const express = require('express');
const router = express.Router();

const Comment = require('../models/comments');

router.post('/tickets/:id', (req, res) => {
    
    Comment.create(req.body, (err, createdComment) => {
        if(err) {
            console.log(err)
            res.json(err);
        } else {
            console.log(req.body)

            Ticket.findById(req.body.ticketId, (err, foundTicket) => {

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