// boys.controller.js
const { readProducts } = require('../helpers/readProducts');
const formatPrice = require('../helpers/formatPrice');

exports.index = function(req, res) {
  console.log('entró al controlador de boys');
  const products = readProducts().boys;
  products.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });
  res.render('boys', { title: 'Boys', products, req });
};

exports.bautizo = function(req, res) {
  const products = readProducts().boys.filter(product => product.subcategory === 'Bautizo');
  products.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });
  console.log('Entró al controlador de bautizo');
  res.render('bautizo', { title: 'Bautizo', products, req });
};

exports.pajecitos = function(req, res) {
  const products = readProducts().boys.filter(product => product.subcategory === 'Pajecitos');
  products.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });
  console.log('Entró al controlador de Pajecitos');
  res.render('pajecitos', { title: 'Pajecitos', products, req });
};

exports.todaOcasion = function(req, res) {
  const products = readProducts().boys.filter(product => product.subcategory === 'Toda Ocasión');
  products.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });
  console.log('Entró al controlador de Toda Ocasión');
  res.render('toda-ocasion', { title: 'Toda Ocasión', products, req });
};