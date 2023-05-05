const router = require('express').Router();

const shopController = require('../controller/shopController');

// middlewares
const Auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/',  shopController.getShops)
router.get('/search', shopController.searchShops)
router.get('/:id', shopController.getShopById)
router.put('/:id', Auth, checkRole('admin'), shopController.editShop)
router.delete('/:id', Auth, checkRole('admin'), shopController.deleteShop)
router.post('/shops', Auth, checkRole('admin') ,shopController.createShop)

module.exports = router