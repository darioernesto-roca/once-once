//Order.routes.js

const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

router.get("/", orderController.get);
router.post("/create-order", orderController.post);

module.exports = router;
  