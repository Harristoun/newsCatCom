const {Router} = require('express')
const { commentsController } = require('../controllers/comments.controller')

const router = Router()

router.post('/comments', commentsController.postCommentsByNews);
router.delete('/comments',commentsController.deleteComments);
router.get('/comments', commentsController.getCommentsNews);


module.exports = router