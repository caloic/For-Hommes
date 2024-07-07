const express = require('express');
const { createComment, likeComment, dislikeComment } = require('../controllers/commentController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/:postId', auth, createComment);
router.post('/:id/like', auth, likeComment);
router.post('/:id/dislike', auth, dislikeComment);

module.exports = router;