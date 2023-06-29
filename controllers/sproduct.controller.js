// Controller for sproduct
const { Product } = require('../models/product');
const formatPrice = require('../helpers/formatPrice');

exports.showProduct = async function (req, res) {
  try {
    const productId = req.params.id;
    console.log(req.params.id);
    const product = await Product.findById(productId).populate('category parentCategory');
    console.log(product);

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    const formattedPrice = formatPrice(product.price);
    const formattedProduct = { ...product.toObject(), price: formattedPrice };

    res.render('sproduct', {
      title: product.name,
      product: formattedProduct,
      req,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el producto');
  }
};