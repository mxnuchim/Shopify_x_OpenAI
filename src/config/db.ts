import mongoose from "mongoose";
import { appConfig } from "./appConfig";
import axios from "axios";
import { stripHtmlTags } from "../utils/stringFunctions";
import { Product } from "../types";
import ProductModel from "../model/product.model";

const { DB_URL, SHOPIFY_ENDPOINT } = appConfig;

const MONGODB_URI = DB_URL;

export async function configureDB() {
  try {
    await mongoose.connect(MONGODB_URI ?? "");
    console.log("Database connected ✅");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process on connection failure
  }
}

export async function populateDB() {
  try {
    const { data } = await axios.get(SHOPIFY_ENDPOINT ?? "");

    const filteredProducts: Product[] = data.products.map((product: any) => ({
      product_id: product.id,
      name: product.title,
      description: stripHtmlTags(product.body_html),
      vendor: product.vendor,
      product_type: product.product_type || "Uncategorized",
      images: product.images.map((image: any) => image.src), // Extracting image URLs from image objects
    }));

    await ProductModel.insertMany(filteredProducts);
    console.log(`Database catalog populated 👍`);
  } catch (error) {
    console.error("Error populating database:", error);
    return [];
  }
}
