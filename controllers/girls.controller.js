// girls.controller.js
const { readProducts } = require('../helpers/read-products');

exports.index = function(req, res) {
  const products = readProducts().girls;
  res.render('girls', { title: 'Girls', products, req });
};
