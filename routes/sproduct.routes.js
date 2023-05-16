const express = require("express");
const router = express.Router();

const sproductController = require("../controllers/sproduct.controller");

router.get('/:id', sproductController.showProduct);

module.exports = router;
