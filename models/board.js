var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
    title: String,
    description: String,
});

module.exports = mongoose.model('Board', BoardSchema);