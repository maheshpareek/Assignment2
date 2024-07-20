const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

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
