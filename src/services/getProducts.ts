import type {Product} from "@/models/product.type";

import {SELLER_ID, API_URL} from "@/config";

export const getProducts = async (category?: string) => {
  const url = new URL(`${API_URL}/sites/MLA/search`);

  if (!SELLER_ID) throw new Error("Could not find seller_id");
  url.searchParams.append("seller_id", SELLER_ID);

  if (category) url.searchParams.append("category", category);

  return fetch(url)
    .then((response) => response.json() as Promise<{results: Product[]}>)
    .then((res) => {
      return res.results;
    });
};
