const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Récupérer tous les posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username'); // Assumant que 'author' est une référence à un modèle User
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;