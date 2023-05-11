//routes/index.js
const express = require('express');
const router = express.Router();

const homeRoutes = require('./home.routes');
const boysRoutes = require('./boys.routes');
const girlsRoutes = require('./girls.routes');

// const postRoutes = require('./post.routes');
// const serviceRoutes = require('./services.routes');
// const usRoutes = require('./us.routes');
// const contactRoutes = require('./contact.routes');
// const legalTermsRoutes = require('./legal.terms.routes');


router.use('/', homeRoutes);
router.use('/inicio', homeRoutes);
router.use('/boys', boysRoutes);
router.use('/girls', girlsRoutes);


// router.use('/boys', boysRoutes);


// router.use('/posts', postRoutes);
// router.use('/servicios', serviceRoutes);
// router.use('/sobre-mi', usRoutes);
// router.use('/contacto', contactRoutes);
// router.use('/terminos-y-condiciones', legalTermsRoutes);

module.exports = router;