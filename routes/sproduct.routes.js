const express = require("express");
const router = express.Router();
const sproductController = require("../controllers/sproduct.controller");

router.get("/", sproductController.index);


module.exports = router;
