//categories.controller.js

const { Category } = require('../models/category');

async function createCategory(req, res) {
    console.log(req.body);
  const { name, parentCategory } = req.body;
  console.log(req.body);

  try {
    console.log(req.body);
    const category = new Category({ name, parentCategory });
    const createdCategory = await category.save();
    res.status(200).json({ message: 'Categoría creada exitosamente.', category: createdCategory });
  } catch (error) {
    console.error('Error al crear la categoría: Vengo de categories.controller', error);
    res.status(500).json({ error: 'Error al crear la categoría. Vengo de categories.controller' });
  }
}

module.exports = {
  createCategory
};