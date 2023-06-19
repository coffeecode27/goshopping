import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _carts from  "./carts.js";
import _categories from  "./categories.js";
import _itemproducts from  "./itemproducts.js";
import _orderlineitem from  "./orderlineitem.js";
import _orders from  "./orders.js";
import _products from  "./products.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const carts = _carts.init(sequelize, DataTypes);
  const categories = _categories.init(sequelize, DataTypes);
  const itemproducts = _itemproducts.init(sequelize, DataTypes);
  const orderlineitem = _orderlineitem.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const products = _products.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  products.belongsTo(categories, { as: "category_category", foreignKey: "category"});
  categories.hasMany(products, { as: "products", foreignKey: "category"});
  orderlineitem.belongsTo(orders, { as: "orders_order", foreignKey: "orders"});
  orders.hasMany(orderlineitem, { as: "orderlineitems", foreignKey: "orders"});
  itemproducts.belongsTo(products, { as: "product_product", foreignKey: "product"});
  products.hasMany(itemproducts, { as: "itemproducts", foreignKey: "product"});
  orderlineitem.belongsTo(products, { as: "product_product", foreignKey: "product"});
  products.hasMany(orderlineitem, { as: "orderlineitems", foreignKey: "product"});
  itemproducts.belongsTo(users, { as: "users_user", foreignKey: "users"});
  users.hasMany(itemproducts, { as: "itemproducts", foreignKey: "users"});
  orders.belongsTo(users, { as: "users_user", foreignKey: "users"});
  users.hasMany(orders, { as: "orders", foreignKey: "users"});

  return {
    carts,
    categories,
    itemproducts,
    orderlineitem,
    orders,
    products,
    users,
  };
}
