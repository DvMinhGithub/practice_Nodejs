const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.getAllProduct)
router.post('/', productController.createProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)
router.get('/search', productController.getProduct);
router.get('/paginate', productController.getAllProductPaginate);
router.get('/searchPaginate', productController.getProductPaginate);
module.exports = router