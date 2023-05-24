const accounting = require('accounting');

function formatPrice(price) {
  const formattedPrice = accounting.formatMoney(price, 'COP $');
  const priceWithoutZeros = formattedPrice.replace(/\.00$/, '');
  return priceWithoutZeros;
}

module.exports = formatPrice;
