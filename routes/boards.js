// Express
var express = require('express');
var router = express.Router();

// DB
var mongoose = require('mongoose');
var Board = require('../models/board.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Board.find(function(err, boards) {
        if (err) return next(err);
        res.json(boards);
    });
});

module.exports = router;