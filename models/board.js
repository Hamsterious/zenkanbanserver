var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Board', BoardSchema);