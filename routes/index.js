//routes/index.js
const express = require('express');
const router = express.Router();

const homeRoutes = require('./home.routes');
const boysRoutes = require('./boys.routes');
const bautizoRoutes = require('./bautizo.routes');
const pajecitosRoutes = require('./pajecitos.routes');
const todaOcasionRoutes = require('./toda.ocasion.routes');
const girlsRoutes = require('./girls.routes');
const vestidosRoutes = require('./vestidos.routes');
const setsRoutes = require('./sets.routes');
const bebesRoutes = require('./bebes.routes');
const sproductRoutes = require('./sproduct.routes');
const blogRoutes = require('./blog.routes');
const cartRoutes = require('./cart.routes');
const usRoutes = require('./us.routes');
const contactRoutes = require('./contact.routes');
const legalTermsRoutes = require('./legal.terms.routes');
const privacyPolicyRoutes = require('./privacy.policy.routes');
const paymentRoutes = require('./payment.routes');
const storeRoutes = require('./store.routes');


router.use('/', homeRoutes);
router.use('/inicio', homeRoutes);
router.use('/boys', boysRoutes);
router.use('/boys/bautizo', bautizoRoutes);
router.use('/boys/pajecitos', pajecitosRoutes);
router.use('/boys/toda-ocasion', todaOcasionRoutes);
router.use('/girls', girlsRoutes);
router.use('/girls/vestidos', vestidosRoutes);
router.use('/girls/sets', setsRoutes);
router.use('/girls/bebes', bebesRoutes);
router.use('/product', sproductRoutes);
router.use('/blog', blogRoutes);
router.use('/carrito-de-compras', cartRoutes);
router.use('/nosotros', usRoutes);
router.use('/contacto', contactRoutes);
router.use('/terminos-y-condiciones', legalTermsRoutes);
router.use('/politica-de-privacidad', privacyPolicyRoutes);
router.use('/payment', paymentRoutes);
router.use('/tienda', storeRoutes);


module.exports = router;