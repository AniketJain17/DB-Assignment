// schema.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define Product schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String },
  SKU: { type: String },
  category_id: { type: Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
  inventory_id: { type: Schema.Types.ObjectId, ref: 'ProductInventory', required: true },
  price: { type: Number, required: true },
  discount_id: { type: Schema.Types.ObjectId, ref: 'Discount' },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
});


// Define Product Category schema
const ProductCategorySchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
});

// Define Product Inventory schema
const ProductInventorySchema = new Schema({
  quality: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
});

// Define Discount schema
const DiscountSchema = new Schema({
  name: { type: String, required: true },
  discount_percent: { type: Number, required: true },
  active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
});


// Create mongoose models from the schemas
const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', ProductInventorySchema);
const Discount = mongoose.model('Discount', DiscountSchema);
const Product = mongoose.model('Product', ProductSchema);

// Export the models
module.exports = {
  ProductCategory,
  ProductInventory,
  Discount,
  Product,
};
