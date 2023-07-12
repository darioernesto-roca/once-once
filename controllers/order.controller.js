// order.controller.js

const { Order } = require('../models/order');

exports.get = function (req, res) {
    const orderId = req.body.orderId;
    console.log(orderId);
  
    // Render the order view with the orderId
    res.render("order", {
      title: "Crear orden",
      orderId: orderId
    });
  };

exports.post = async function (req, res) {
  const orderData = req.body;
  const cartItems = req.body.cartItems || [];

  // Remove the 'cartItems' field from the order data so it won't be saved in the database
  delete orderData.cartItems;

  // Assign the cartItems to the 'orderItems' property of the order
  orderData.orderItems = cartItems.map((item) => {
    return { product: item.productId, quantity: item.quantity };
  });

  const newOrder = new Order(orderData);
  newOrder.save()
    .then(savedOrder => {
      res.json(savedOrder);
    })
    .catch(_ => {
      res.status(500).json({ error: 'Error al guardar la orden' });
    });
};
