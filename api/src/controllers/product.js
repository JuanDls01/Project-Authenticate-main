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

const getProductById = async (req,res) => {
    const {productId} = req.params;
    const product = await Products.findOne({
        where: {
            id: productId,
        }
    });
    res.status(200).json(product);
}

const updateProductById = async (req,res) => {
    const {productId} = req.params;
    const newProps = req.body;
    // console.log('newProps:',newProps);
    const updatedProduct = await Products.update(newProps, {
            where: {
                id: productId
            }
        }
    )
    // console.log('updatedProduct:', updatedProduct)
    res.status(200).json(updatedProduct);
}

const deleteProductById = async (req,res) => {
    const {productId} = req.params;
    const productDeleted = await Products.destroy({
        where: {
            id: productId
        }
    })
    console.log('productDeleted:', productDeleted)
    res.status(204).json(productDeleted);
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
}