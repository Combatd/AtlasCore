const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema( {
    title: { type: String },
    owner_id: { type: String },
    created_at: {
        type: Date,
        default: Date.now
    },
    category: { 
        type: String
    },
    comments: [
        // comments will be pushed into here
    ],
    
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;