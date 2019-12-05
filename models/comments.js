const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    owner_id: { type: String },
    title: { type: String },
    body: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});


const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;