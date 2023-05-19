// helpers.js
const fs = require('fs');

exports.readProducts = function() {
  const filePath = './public/products.json';
  console.log('Reading file:', filePath);
  const rawdata = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(rawdata).productsDB;
};