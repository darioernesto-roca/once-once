const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment.controller");

router.get('/create-order', paymentController.createOrder);
router.get('/success', paymentController.success);
router.get('/webhook', paymentController.webhook);

module.exports = router;