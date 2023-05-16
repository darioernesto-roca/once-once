// Controller for Girls

const fs = require('fs');

exports.index = function(req, res) {

  // Leer el archivo posts.json
  const filePath = './public/products.json';
  console.log('Reading file:', filePath);
  const rawdata = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(rawdata).productsDB.products;

  res.render('girls', { title: 'Girls', products: products, req });
};

