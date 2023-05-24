// girls.controller.js
const { readProducts } = require('../helpers/read-products');

exports.index = function(req, res) {
  const products = readProducts().girls;
  res.render('girls', { title: 'Girls', products, req });
};

exports.vestidos = function(req, res) {
  const products = readProducts().girls.filter(product => product.subcategory === 'Vestidos');
  console.log('Entró al controlador de vestidos');
  console.log(products)

  
  res.render('vestidos', { title: 'Vestidos', products, req });
};

exports.sets = function(req, res) {
  const products = readProducts().girls.filter(product => product.subcategory === 'Sets');
  console.log('Entró al controlador de Setss');
  console.log(products)

  
  res.render('sets', { title: 'Sets', products, req });
};

exports.bebes = function(req, res) {
  const products = readProducts().girls.filter(product => product.subcategory === 'Bebés');
  console.log('Entró al controlador de Bebés');
  console.log(products)

  
  res.render('bebes', { title: 'Bebés', products, req });
};