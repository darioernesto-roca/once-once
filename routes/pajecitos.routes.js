const express = require("express");
const router = express.Router();
const boysController = require("../controllers/boys.controller");

router.get("/", boysController.pajecitos);

module.exports = router;
