
import mongoose from 'mongoose';

// Define a schema for the House model
const productSchema = new mongoose.Schema(
  {
    images: [String], // Array of image URLs
    status: {
      type: String,
      enum: ["available", "out of stock"],
      default: "available",
    },
    name: {
      type: String,
      required: true,
      maxlength,
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    description: {
      type: String,
    },
    sizes: {
      type: [String],
      required: true,
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      maxlength: 500,
    },
  },
  { timestamps: true }
).index({ name: 1 });

// Create a Mongoose model based on the schema
const Product = mongoose.model('Product', productSchema);

export default Product;
