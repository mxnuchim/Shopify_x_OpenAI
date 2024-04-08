import dotenv from "dotenv";
dotenv.config();

const SHOPIFY_ENDPOINT = process.env.SHOPIFY_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const PORT = process.env.PORT || 8080;
const PIPELINE = process.env.PIPELINE ?? "approach_x";
const DB_URL = process.env.DB_URL;

export const appConfig = {
  SHOPIFY_ENDPOINT,
  OPENAI_API_KEY,
  PORT,
  PIPELINE,
  DB_URL,
};
