// home.controller.js
const { readFeatures, readNews } = require('../helpers/readProducts');
const formatPrice = require('../helpers/formatPrice');

exports.index = function(req, res) {
  console.log('entró al controlador de home');
  const features = readFeatures();
  // Formatea los precios utilizando accounting
  features.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });

  const news = readNews();
  news.forEach(product => {
    product.formattedPrice = formatPrice(product.price);
  });
  res.render('home', { title: 'Once Once', features, news, req });
};

