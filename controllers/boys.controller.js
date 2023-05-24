// boys.controller.js
const { readProducts } = require('../helpers/read-products');

exports.index = function(req, res) {
  console.log('entró al controlador de boys');
  const products = readProducts().boys;
  res.render('boys', { title: 'Boys', products, req });
};

exports.bautizo = function(req, res) {
  const products = readProducts().boys.filter(product => product.subcategory === 'Bautizo');
  console.log('Entró al controlador de bautizo');
  console.log(products)

  
  res.render('bautizo', { title: 'Bautizo', products, req });
};

exports.pajecitos = function(req, res) {
  const products = readProducts().boys.filter(product => product.subcategory === 'Pajecitos');
  console.log('Entró al controlador de Pajecitos');
  console.log(products)

  
  res.render('pajecitos', { title: 'Pajecitos', products, req });
};

exports.todaOcasion = function(req, res) {
  const products = readProducts().boys.filter(product => product.subcategory === 'Toda Ocasión');
  console.log('Entró al controlador de Toda Ocasión');
  console.log(products)

  
  res.render('toda-ocasion', { title: 'Toda Ocasión', products, req });
};