// girls.controller.js
const { readProducts } = require('../helpers/readProducts');
const formatPrice = require('../helpers/formatPrice');

exports.index = function(req, res) {
  const products = readProducts().girls;
  products.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });
  res.render('girls', { title: 'Girls', products, req });
};

exports.vestidos = function(req, res) {
  const products = readProducts().girls.filter(product => product.subcategory === 'Vestidos');
  products.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });
  console.log('Entró al controlador de vestidos');
  res.render('vestidos', { title: 'Vestidos', products, req });
};

exports.sets = function(req, res) {
  const products = readProducts().girls.filter(product => product.subcategory === 'Sets');
  products.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });
  console.log('Entró al controlador de Setss');
  res.render('sets', { title: 'Sets', products, req });
};

exports.bebes = function(req, res) {
  const products = readProducts().girls.filter(product => product.subcategory === 'Bebés');
  products.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });
  console.log('Entró al controlador de Bebés');
  res.render('bebes', { title: 'Bebés', products, req });
};