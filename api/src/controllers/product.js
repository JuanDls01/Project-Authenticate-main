const { Products } = require('../db.js')

const createProduct = async (req,res) => {
    const { name, category, price, imgURL } = req.body;
    const newProduct = await Products.create({
        name, 
        category,
        price,
        imgURL
    })
    res.status(201).json(newProduct)
}

const getProducts = async (req,res) => {
    const products = await Products.findAll();
    res.json(products);
}

const getProductById = (req,res) => {
    
}

const updateProductById = (req,res) => {
    
}

const deleteProductById = (req,res) => {
    
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
}