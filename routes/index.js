//routes/index.js
const express = require('express');
const router = express.Router();

const homeRoutes = require('./home.routes');
const boysRoutes = require('./boys.routes');
const girlsRoutes = require('./girls.routes');
const sproductRoutes = require('./sproduct.routes');
const blogRoutes = require('./blog.routes');


router.use('/', homeRoutes);
router.use('/inicio', homeRoutes);
router.use('/boys', boysRoutes);
router.use('/girls', girlsRoutes);
router.use('/product', sproductRoutes);
router.use('/blog', blogRoutes);


module.exports = router;