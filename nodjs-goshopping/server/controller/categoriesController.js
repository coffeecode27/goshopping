import models from "../models/init-models";

// Controller untuk menambahkan kategori baru
export const createCategory = async (req, res) => {
  try {
    const { categoryname } = req.body;
    const category = await req.context.models.categories.create({ categoryname });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category', error });
  }
};

// Controller untuk mendapatkan semua kategori
export const getCategories = async (req, res) => {
  try {
    const categories = await models.categories.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Controller untuk mendapatkan kategori berdasarkan ID
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await models.categories.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category' });
  }
};

// Controller untuk mengupdate kategori berdasarkan ID
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryname } = req.body;
    const category = await models.categories.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    category.categoryname = categoryname;
    await category.save();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' });
  }
};

// Controller untuk menghapus kategori berdasarkan ID
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await models.categories.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    await category.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
};

export default {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}