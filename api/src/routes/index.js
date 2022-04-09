const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productsRouter = require('./products.js');
const authRouter = require('./auth.js');
const usersRouter = require('./user.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);


module.exports = router;
