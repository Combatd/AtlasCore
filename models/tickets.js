const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema( {
    title: { type: String, required: true },
    user: { 
        type: Schema.Types.ObjectId, ref: 'users' 
    },
    created_at: { type: Date, default: Date.now },
    closed_date: { type: Date },
    updated: { type: Date },
    category: { type: String },
    is_open: { type: Boolean, default: true },
    text: { type: String },
    comments: [
        // comments will be pushed into here
    ],
    
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;