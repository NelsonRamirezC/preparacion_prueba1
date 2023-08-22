import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _brands from  "./brands.js";
import _categories from  "./categories.js";
import _customers from  "./customers.js";
import _order_items from  "./order_items.js";
import _orders from  "./orders.js";
import _products from  "./products.js";
import _staffs from  "./staffs.js";
import _stocks from  "./stocks.js";
import _stores from  "./stores.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const brands = _brands.init(sequelize, DataTypes);
  const categories = _categories.init(sequelize, DataTypes);
  const customers = _customers.init(sequelize, DataTypes);
  const order_items = _order_items.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const products = _products.init(sequelize, DataTypes);
  const staffs = _staffs.init(sequelize, DataTypes);
  const stocks = _stocks.init(sequelize, DataTypes);
  const stores = _stores.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  products.belongsToMany(stores, { as: 'store_id_stores', through: stocks, foreignKey: "product_id", otherKey: "store_id" });
  stores.belongsToMany(products, { as: 'product_id_products', through: stocks, foreignKey: "store_id", otherKey: "product_id" });
  products.belongsTo(brands, { as: "brand", foreignKey: "brand_id"});
  brands.hasMany(products, { as: "products", foreignKey: "brand_id"});
  products.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(products, { as: "products", foreignKey: "category_id"});
  orders.belongsTo(customers, { as: "customer", foreignKey: "customer_id"});
  customers.hasMany(orders, { as: "orders", foreignKey: "customer_id"});
  order_items.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(order_items, { as: "order_items", foreignKey: "order_id"});
  order_items.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(order_items, { as: "order_items", foreignKey: "product_id"});
  stocks.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(stocks, { as: "stocks", foreignKey: "product_id"});
  orders.belongsTo(staffs, { as: "staff", foreignKey: "staff_id"});
  staffs.hasMany(orders, { as: "orders", foreignKey: "staff_id"});
  staffs.belongsTo(staffs, { as: "manager", foreignKey: "manager_id"});
  staffs.hasMany(staffs, { as: "staffs", foreignKey: "manager_id"});
  orders.belongsTo(stores, { as: "store", foreignKey: "store_id"});
  stores.hasMany(orders, { as: "orders", foreignKey: "store_id"});
  staffs.belongsTo(stores, { as: "store", foreignKey: "store_id"});
  stores.hasMany(staffs, { as: "staffs", foreignKey: "store_id"});
  stocks.belongsTo(stores, { as: "store", foreignKey: "store_id"});
  stores.hasMany(stocks, { as: "stocks", foreignKey: "store_id"});

  return {
    brands,
    categories,
    customers,
    order_items,
    orders,
    products,
    staffs,
    stocks,
    stores,
    users,
  };
}
