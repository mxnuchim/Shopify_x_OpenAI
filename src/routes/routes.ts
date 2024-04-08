import express, { Request, Response } from "express";
import { IResponse, Product } from "../types";
import { getFashionAdvice } from "../services/openai";
import ProductModel from "../model/product.model";
import mongoose from "mongoose";

export function configureRoutes(app: express.Application) {
  app.get("/", async (req, res) => {
    res.json({ message: "Hello 👋\nYou've reached the server!" });
  });

  app.get("/products", async (req: Request, res: Response<IResponse>) => {
    try {
      // Fetch all products from the database
      const products: Product[] = await ProductModel.find();

      res.json({
        success: true,
        message: "Products retrieved successfully",
        data: products,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching products",
        data: error,
      });
    }
  });

  app.get("/product/:id", async (req: Request, res: Response<IResponse>) => {
    const productId = req.params.id;

    // Check if the provided ID is a valid ObjectId
    const isValidObjectId = mongoose.Types.ObjectId.isValid(productId);

    try {
      // Find the product by ID in the database
      let product;

      if (isValidObjectId) {
        // If the ID is a valid ObjectId, search by _id
        product = await ProductModel.findOne({ _id: productId });
      } else {
        // If the ID is not a valid ObjectId, search by product_id
        product = await ProductModel.findOne({
          product_id: Number(productId),
        });
      }

      // Check if the product was found
      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }

      res.json({
        success: true,
        message: "Product retrieved successfully",
        data: product,
      });
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching product",
        data: error,
      });
    }
  });

  app.patch("/product/:id", async (req: Request, res: Response<IResponse>) => {
    const productId = req.params.id;
    const updateData = req.body;

    try {
      // Update the product by ID
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        productId,
        updateData,
        { new: true }
      );

      // Check if the product was updated
      if (!updatedProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found for update" });
      }

      res.json({
        success: true,
        message: "Product updated successfully",
        data: updatedProduct,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({
        success: false,
        message: "Error updating product",
        data: error,
      });
    }
  });

  // Delete a product by ID
  app.delete("/product/:id", async (req: Request, res: Response<IResponse>) => {
    const productId = req.params.id;

    try {
      // Delete the product by ID
      const deletedProduct = await ProductModel.findByIdAndDelete(productId);

      // Check if the product was deleted
      if (!deletedProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found for deletion" });
      }

      res.json({
        success: true,
        message: "Product deleted successfully",
        data: deletedProduct,
      });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({
        success: false,
        message: "Error deleting product",
        data: error,
      });
    }
  });

  app.post(
    "/fashion-advice",
    async (req: Request, res: Response<IResponse>) => {
      console.log(req.body);
      const { query } = req.body;
      try {
        const advice = await getFashionAdvice(query);

        res.json({
          success: true,
          message: `Returning advice for ${query}`,
          data: advice,
        });
      } catch (error) {
        console.log("Error fetching fashion advice:", error);
        res
          .status(500)
          .json({ message: "Error dey", success: false, data: error });
      }
    }
  );
}
