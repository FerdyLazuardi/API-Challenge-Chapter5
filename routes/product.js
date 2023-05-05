const router = require('express').Router();

const productController = require('../controller/productController');

router.get('/', productController.getProducts)
router.get('/search', productController.searchProduct)
router.get('/products/:id', productController.getProductById)
router.put('/products/:id', productController.editProduct)
router.delete('/products/:id', productController.deleteProduct)
router.post('/products', productController.createProduct)

module.exports = router