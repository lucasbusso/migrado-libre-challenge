/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type {Product} from "@/models/product.type";
import type {Category} from "@/models/category.interface";

import {API_URL} from "@/config";

export const getCategories = async (products: Product[]) => {
  const ids = Array.from(new Set(products.map((product) => product.category_id)));
  const allProductCategories = await Promise.all(
    ids.map((id) =>
      fetch(`${API_URL}/categories/${id}`)
        .then((res) => res.json() as Promise<{path_from_root: {id: string; name: string}[]}>)
        .then((res) => res.path_from_root),
    ),
  );

  const draft: Record<string, Category> = {};

  allProductCategories.forEach((productCategories) => {
    productCategories.forEach((singleCategory, index) => {
      const {id} = singleCategory;
      const parent = productCategories[index - 1] as Category | undefined;
      const parentId = parent?.id ?? null;

      draft[id] = {...singleCategory, parentId};
    });
  });

  return Object.values(draft);
};
