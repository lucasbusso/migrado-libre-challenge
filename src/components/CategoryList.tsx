"use client";

import type {Category} from "@/models/category.interface";

import CategoryItem from "./CategoryItem";

function ListOfCategories({
  categories,
  parentCategory = null,
}: {
  categories: Category[];
  parentCategory?: string | null;
}) {
  const categoriesToRender = categories.filter(({parentId}) => {
    return parentCategory === parentId;
  });

  return (
    <ul>
      {categoriesToRender.map((category) => (
        <CategoryItem key={category.id} categories={categories} category={category} />
      ))}
    </ul>
  );
}

export default ListOfCategories;
