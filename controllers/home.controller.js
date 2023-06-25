// home.controller.js
const { readFeatures, readNews } = require('../helpers/readProducts');
const formatPrice = require('../helpers/formatPrice');
const { Product } = require('../models/product');

exports.index = async function (req, res) {
  try {
    const products = await Product.find().populate('category parentCategory');
    const news = readNews();
    news.forEach(product => {
      product.formattedPrice = formatPrice(product.price);
    });

    res.render('home', {
      title: 'Once Once',
      products,
      news,
      req,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los productos');
  }
};
