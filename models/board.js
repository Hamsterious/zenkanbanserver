var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Board', BoardSchema);