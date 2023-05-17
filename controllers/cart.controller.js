// Controller for cart

exports.index = function (req, res) {
    console.log("Entró al controlador de cart");
    res.render("cart", {
      title: "Carrito de Compras",
    });
  };