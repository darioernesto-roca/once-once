const { Order } = require('../models/order');

exports.get = function (req, res) {
  console.log("Entró al controlador de order");
  res.render("order", {
    title: "Crear orden",
  });
};

exports.post = async function (req, res) {

  const orderData = req.body;
  const cartItems = orderData.products || []; // Use orderData.products instead of req.body.cartItems

  // Remove the 'products' field from the order data so it won't be saved in the database
  delete orderData.products;

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

