const {Router} = require('express')
const { newsController } = require('../controllers/news.controller')

const router = Router()


router.get('/news', newsController.getAllNews);
router.get('news/:id', newsController.getSpecificNews);
router.post('news', newsController.postNews)
router.delete('/news/:id', newsController.deleteNews);
router.patch('/news/:id', newsController.pathNews);
router.get('/news/categories/:id', newsController.getCatNews)









module.exports = router