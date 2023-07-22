const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    size: [String],
    countInStock: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    categories: [String],
    subcategories: [String],
    images: [String],
    availableColors: [String],
    colors: [String],
    feature: { type: Boolean, default: false },
    new: { type: Boolean, default: false },
  });

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});


exports.Product = mongoose.model('Product', productSchema);
