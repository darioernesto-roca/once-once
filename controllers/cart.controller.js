// Controller for cart

exports.index = function (req, res) {
    console.log("Entró al controlador de cart");
    res.render("cart", {
      title: "Carrito de Compras",
    });
  };

  exports.createOrder = function (req, res) {
    const orderData = req.body;
    // Process the orderData and save it to the database
    // ...
    // Send a response indicating the order was created successfully
    res.json({ message: "Order created successfully" });
  };