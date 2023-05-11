// Controller for Boys
console.log('VENGO DEL CONTROLADOR DE SHOP')
const fs = require('fs');

exports.index = function(req, res) {
  console.log('VENGO DEL CONTROLADOR DE BOYS')
    console.log('Entró al controlador de products.boys');
  // Leer el archivo posts.json
  const filePath = './public/products.json';
  console.log('Reading file:', filePath);
  const rawdata = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(rawdata).productsDB.products;

  res.render('boys', { title: 'Boys', products: products, req });
};