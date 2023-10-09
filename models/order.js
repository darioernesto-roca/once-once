const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  items: [{
    productId: String,
    quantity: Number,
  }],
  totalAmount: Number,
  currency: String,
  status: String, // pending, completed, cancelled
  transactionId: String,
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
