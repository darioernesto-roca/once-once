// Controller for sproduct

const fs = require('fs');

console.log('VENGO DEL CONTROLADOR DE SPRODUCT')

exports.showProduct = (req, res) => {
console.log('Ingresó a showProduct');
  const productId = req.params['id'];
  const filePath = './public/products.json';
  
  const rawdata = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(rawdata).productsDB.products;
  const product = products.find(product => product.id === parseInt(productId));

  if (!product) {
    return res.status(404).send('Product not found');
  }

  res.render('sproduct', { title: product.title, product: product });
};