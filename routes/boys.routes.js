const express = require("express");
const router = express.Router();
const boysController = require("../controllers/boys.controller");

router.get("/", boysController.index);

module.exports = router;
