const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

router.get("/", cartController.index);
router.post("/", cartController.createOrder);

module.exports = router;