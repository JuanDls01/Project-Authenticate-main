const { Router } = require('express');
const {  createProduct, getProducts, getProductById, updateProductById, deleteProductById } = require('../controllers/product');

const router = Router();

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:productId', getProductById);

router.put('/:productId', updateProductById);

router.delete('/:productId', deleteProductById)

module.exports = router;