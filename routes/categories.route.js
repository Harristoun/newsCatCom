const {Router} = require('express')
const { categoriesController } = require('../controllers/categories.controller')


const router = Router()

router.post('/categories', categoriesController.postCategories);
router.delete('/categories', categoriesController.deleteCategories);
router.get('router', categoriesController.getCategories);

module.exports = router