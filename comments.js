// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middlewares/auth');

router.get('/getComment', commentController.getComment);
router.post('/addComment', auth, commentController.addComment);
router.post('/updateComment', auth, commentController.updateComment);
router.post('/deleteComment', auth, commentController.deleteComment);

module.exports = router;