// helper read-product.js
const fs = require('fs');

exports.readProducts = function() {
  const filePath = './public/products.json';
  console.log('Reading file:', filePath);
  const rawdata = fs.readFileSync(filePath, 'utf8');
  const productsDB = JSON.parse(rawdata).productsDB;
  
  return productsDB;
};

exports.readFeatures = function() {
  const filePath = './public/features.json';
  console.log('Reading file:', filePath);
  const rawdata = fs.readFileSync(filePath, 'utf8');
  const featuresDB = JSON.parse(rawdata).featuresDB;
  
  return featuresDB;
};

exports.readNews = function() {
  const filePath = './public/news.json';
  console.log('Reading file:', filePath);
  const rawdata = fs.readFileSync(filePath, 'utf8');
  const newsDB = JSON.parse(rawdata).newsDB;
  
  return newsDB;
};

