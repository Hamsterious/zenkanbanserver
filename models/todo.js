var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    title: String,
    details: String,
    order: Number,
    boardId: { type: Schema.Types.ObjectId, ref: 'Column' }
});

module.exports = mongoose.model('Todo', TodoSchema);