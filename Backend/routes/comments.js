const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// @route   POST /api/comments
// @desc    Add a new comment
router.post('/', async (req, res) => {
    try {
        const { product, user, rating, images, text } = req.body;
        const newComment = new Comment({
            product,
            user,
            rating,
            images,
            text
        });

        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route   GET /api/comments
// @desc    Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
