// Controller for sproduct
const { Product } = require('../models/product');
const formatPrice = require('../helpers/formatPrice');

exports.showProduct = async function (req, res) {
  try {
    const productId = req.params.id;
    console.log(req.params.id);
    const product = await Product.findById(productId).populate('categories');
    console.log(product);

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    const formattedPrice = formatPrice(product.price);
    const formattedProduct = { ...product.toObject(), price: formattedPrice };

    // Fetch 4 random products
    const randomProducts = await Product.aggregate([
      { $sample: { size: 4 } }
    ]);

    const formattedRandomProducts = randomProducts.map(product => {
      const formattedPrice = formatPrice(product.price);
      return { ...product, price: formattedPrice };
    });

    res.render('sproduct', {
      title: product.name,
      product: formattedProduct,
      featureProducts: formattedRandomProducts,
      req,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el producto');
  }
};
