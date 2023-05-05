const router = require('express').Router();

// import package swagger 
const swaggerUi = require('swagger-ui-express');
// import file json
const swaggerDocument = require('../docs/swagger.json')


// API docs => dokumentasi API
router.use('/api-docs', swaggerUi.serve)
router.use('/api-docs', swaggerUi.setup(swaggerDocument))

// router user
const User = require('./users');
router.use('/api/v1/users/', User);

// router product
const Product = require('./product');
router.use('/api/v1/products/', Product)

// router shops
const Shop = require('./shops');
router.use('/api/v1/shops/', Shop)

// Dashboard

module.exports = router