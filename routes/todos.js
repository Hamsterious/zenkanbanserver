// Express
var express = require('express');
var router = express.Router();

// Schemas
var mongoose = require('mongoose');
var Todo = require('../models/todo.js');
var Column = require('../models/column.js');

// Routes
// GET ALL
router.get('', function(req, res, next) {
    Todo.find(function(err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

// CREATE
router.post('', function(req, res, next) {
    // Create the column
    Todo.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// GET BY ID
router.get('/:id', function(req, res, next) {
    Todo.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// GET ALL BY COLUMNS ID
router.get('/column/:id', function(req, res, next) {
    Todo.find({ 'columnId': req.params.id }, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// UPDATE
router.post('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// DELETE
router.post('/delete/:id', function(req, res, next) {
    Todo.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;