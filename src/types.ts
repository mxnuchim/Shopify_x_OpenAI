interface Product {
  product_id?: number;
  name: string;
  description: string;
  vendor: string;
  product_type: string;
  images: string[];
}

interface CatalogChatItem {
  name: string;
}

// interface Product {
//   id: number;
//   title: string;
//   handle: string;
//   description: string;
//   published_at: string;
//   created_at: string;
//   updated_at: string;
//   vendor: string;
//   product_type: string;
//   tags: string[];
//   variants: Variant[];
//   images: Image[];
//   options: Option[];
// }

interface Variant {
  id: number;
  title: string;
  option1: string;
  option2: string | null;
  option3: string | null;
  price: string;
}

interface Image {
  id?: number;
  src: string;
}

interface Option {
  name: string;
  values: string[];
}

interface IResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export { Product, Variant, Image, Option, CatalogChatItem, IResponse };
