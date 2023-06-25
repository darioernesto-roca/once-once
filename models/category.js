const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

categorySchema.virtual('id').get(function () {
  return this._id.toHexString();
});

categorySchema.set('toJSON', {
  virtuals: true,
});

exports.Category = mongoose.model('Category', categorySchema);
