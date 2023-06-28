// Controller for sproduct
const { Types } = require('mongoose');
const { Product } = require('../models/product');

exports.showProduct = async (req, res) => {
  console.log('Ingresó a showProduct');
  const productId = req.params['id'];

  try {
    const product = await Product.findById(new Types.ObjectId(productId));

    if (!product) {
      return res.status(404).send('Product not found');
    }

    res.render('sproduct', { title: product.title, product: product });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el producto');
  }
};
