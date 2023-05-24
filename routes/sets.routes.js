const express = require("express");
const router = express.Router();
const girlsController = require("../controllers/girls.controller");

router.get("/", girlsController.sets);

module.exports = router;