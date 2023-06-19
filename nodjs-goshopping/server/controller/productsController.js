import models from "../models/init-models";

export const createProduct = async (req, res) => {
  try {
    const { name, categoryname, stock, price } = req.body;
    // Mendapatkan kategori berdasarkan nama kategori
    const category = await models.categories.findOne({ where: { categoryname } });
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    // Membuat produk dengan kategori yang berbeda
    const product = await req.context.models.products.create({
      name,
      category: category.categoryid,
      stock,
      price,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product', error });
  }
};


const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Cek apakah produk tersedia
    const product = await models.products.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // Cek apakah stok produk mencapai 0
    if (product.stock === 0) {
      return res.status(400).json({ error: 'Stok sudah habis' });
    }
    // Kurangi jumlah stok produk
    product.stock -= 1;
    await product.save();
    // Dapatkan informasi tambahan seperti nama produk atau username berdasarkan identifier
    const user = await models.users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Buat objek item yang akan ditambahkan ke dalam keranjang
    const status = 'OPEN'
    const cartItem = {
      productId,
      productPrice:product.price,
      qty:1,
      status:status,
    };
  
    // Simpan data ke dalam keranjang
    await models.carts.create({ cart: [cartItem] });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add to cart', error });
  }
};



export default {
  createProduct,
  addToCart
};
