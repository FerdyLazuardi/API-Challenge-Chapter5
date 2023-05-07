const router = require('express').Router();
const Auth = require('../middleware/auth');
const productController = require('../controller/productController');

router.get('/', productController.getProducts)
router.get('/search', productController.searchProduct)
router.get('/:id', productController.getProductById)
router.put('/:id', productController.editProduct)
router.delete('/:id', Auth, productController.deleteProduct)
router.post('/', Auth, productController.createProduct)

module.exports = router