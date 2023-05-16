// Controller for Boys

const fs = require('fs');

exports.index = function(req, res) {
    console.log('Entró al controlador de products.boys');
  // Leer el archivo posts.json
  const filePath = './public/products.json';
  console.log('Reading file:', filePath);
  const rawdata = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(rawdata).productsDB.products;

  res.render('boys', { title: 'Boys', products: products, req });
};