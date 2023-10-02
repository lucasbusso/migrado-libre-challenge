export interface Product {
  id: string;
  title: string;
  price: number;
  original_price: number;
  available_quantity: number;
  tags: string[];
  category_id: string;
  thumbnail: string;
  catalog_product_id: string;
  currency_id: string;
  currency: string;
}
