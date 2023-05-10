//replace the modes/index.js file with this file

// import models
const Product = require('./Product');
const User = require('./User');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const Item = require('./Item.js')

// // Products belongsTo Category
// Product.belongsTo(Category, {
//   foreignKey: 'category_id',
// }); 
// // Categories have many Products
// Category.hasMany(Product);
// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: ProductTag,
//   // as: 'product_tags',
//   foreignKey: 'product_id',
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   // as: 'product_tags',
//   foreignKey: 'tag_id',
// });

module.exports = {
  Product,
  User,
  Tag,
  ProductTag,
  Item,
};
