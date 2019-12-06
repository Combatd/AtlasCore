const express = require('express');
const router = express.Router();



const User = require('../models/users');
const Ticket = require('../models/tickets');


// Ticket - Index
router.get('/', (req, res) => {
    console.log(req.session);

    Ticket.find()
    .sort( { created_at: -1 } )
    .then(  tickets => res.json(tickets)  )
    .catch( (error) => 
        res.status(404).json( { noticketsFound: "No tickets found"})  
    );
});

// Find all User's tickets
router.get('/user/:user_id', (req, res) => {

    Ticket.find( { user: req.params.user_id } )
    .then( (tickets) => res.json(tickets) )
    .catch( (error) => res.status(404).json( { noticketsFound: 'No tickets found from that user' }))

});

// Ticket - Show
router.get('/:id', (req, res) => {
    
    Ticket.findById(req.params.id)
    .then( (ticket) => res.json(ticket) )
    .catch( (error) => res.status(404).json({ noticketFound: 'No ticket found with that id' }))

});

// Ticket - Post
router.post('/', (req, res) => {

    // create new ticket from the schema
    const newTicket = new Ticket({
        title: req.body.title,
        category: req.body.category,
        text: req.body.text
    });

    console.log(newTicket)


    // save to the database
    newTicket.save()
    .then( (ticket) => {
        console.log(ticket)
        res.json(ticket)
    }  )
    .catch( (error) => res.status(500).json( { }) )
})







module.exports = router;