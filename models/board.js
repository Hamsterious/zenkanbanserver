var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
    id: Number,
    title: String
});

module.exports = mongoose.model('Board', BoardSchema);