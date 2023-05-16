// Controller for sproduct

const fs = require('fs');

exports.showProduct = (req, res) => {
  console.log('Ingresó a showProduct');
  const productId = req.params['id'];
  const filePath = './public/products.json';

  const rawdata = fs.readFileSync(filePath, 'utf8');
  const productsDB = JSON.parse(rawdata).productsDB;
  const boysProducts = productsDB.boys;
  const girlsProducts = productsDB.girls;

  // Buscar el producto en ambas categorías
  const product = boysProducts.find((product) => product.id === parseInt(productId)) ||
    girlsProducts.find((product) => product.id === parseInt(productId));

  if (!product) {
    return res.status(404).send('Product not found');
  }

  res.render('sproduct', { title: product.title, product: product });
};
