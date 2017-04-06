var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColumnSchema = new Schema({
    title: String,
    order: Number,
    boardId: { type: Schema.Types.ObjectId, ref: 'Board' }
});

module.exports = mongoose.model('Column', ColumnSchema);