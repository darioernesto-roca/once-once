// boys.controller.js
const { readProducts } = require('../helpers/read-products');

exports.index = function(req, res) {
  const products = readProducts().boys;
  res.render('boys', { title: 'Boys', products, req });
};