//routes/index.js
const express = require('express');
const router = express.Router();

const homeRoutes = require('./home.routes');
const boysRoutes = require('./boys.routes');
const girlsRoutes = require('./girls.routes');
const sproductRoutes = require('./sproduct.routes');
const blogRoutes = require('./blog.routes');
const cartRoutes = require('./cart.routes');
const usRoutes = require('./us.routes');


router.use('/', homeRoutes);
router.use('/inicio', homeRoutes);
router.use('/boys', boysRoutes);
router.use('/girls', girlsRoutes);
router.use('/product', sproductRoutes);
router.use('/blog', blogRoutes);
router.use('/carrito-de-compras', cartRoutes);
router.use('/nosotros', usRoutes);


module.exports = router;