import mongoose, { Document, Schema, Model } from "mongoose";
import { Product } from "../types";

// Interface representing the structure of a product document
interface ProductDocument extends Document, Product {}

// Schema for the product collection
const productSchema = new Schema<ProductDocument>({
  product_id: { type: Number },
  name: { type: String, required: true },
  description: { type: String, required: true },
  vendor: { type: String, required: true },
  product_type: { type: String, required: true },
  images: { type: [String], required: true },
});

// Define the Product model based on the schema
const ProductModel: Model<ProductDocument> = mongoose.model(
  "Product",
  productSchema
);

export default ProductModel;
