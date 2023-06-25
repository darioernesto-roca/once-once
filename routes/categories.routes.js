// categories.routes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories.controller');

router.post('/', categoryController.createCategory);

module.exports = router;