// Express
var express = require('express');
var router = express.Router();

// Schemas
var mongoose = require('mongoose');
var Board = require('../models/board.js');

//
router.get('/boards', function(req, res, next) {
    Board.find(function(err, boards) {
        if (err) return next(err);
        res.json(boards);
    });
});

router.post('/boards', function(req, res, next) {
    Board.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;