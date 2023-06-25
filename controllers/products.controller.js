const { Product } = require('../models/product');

exports.createProduct = async function (req, res) {
  try {
    const { name, description, color, size, countInStock, price } = req.body;

    const product = new Product({
      name,
      description,
      color,
      size,
      countInStock,
      price,
      category: mongoose.Types.ObjectId('<ID_DE_CATEGORIA>'), // Reemplaza <ID_DE_CATEGORIA> con el ID de la categoría correspondiente
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo crear el producto' });
  }
};