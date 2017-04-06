// Express
var express = require('express');
var router = express.Router();

// Schemas
var mongoose = require('mongoose');
var Board = require('../models/board.js');

// Routes
// GET ALL
router.get('/boards', function(req, res, next) {
    Board.find(function(err, boards) {
        if (err) return next(err);
        res.json(boards);
    });
});

// CREATE
router.post('/boards', function(req, res, next) {
    Board.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// GET BY ID
router.get('/boards/:id', function(req, res, next) {
    Board.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// UPDATE
router.post('/boards/:id', function(req, res, next) {
    Board.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// DELETE
router.post('/boards/delete/:id', function(req, res, next) {
    Board.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;