const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.createComment = async (req, res) => {
    const { content } = req.body;
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        const comment = await Comment.create({ content, author: req.user, post: postId });
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.likeComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        if (!comment.likes.includes(req.user)) {
            comment.likes.push(req.user);
            await comment.save();
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.dislikeComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        if (!comment.dislikes.includes(req.user)) {
            comment.dislikes.push(req.user);
            await comment.save();
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};