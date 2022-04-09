const { Router } = require('express');
// const {  createProduct, getProducts, getProductById, updateProductById, deleteProductById } = require('../controllers/product');

const router = Router();

router.get('/', (req,res,next)=>{
    try{
        res.send('hola');
    }
    catch (error) {
        next(error)
    }
});

module.exports = router;