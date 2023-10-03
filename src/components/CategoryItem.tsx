"use client";
import type {Category} from "@/models/category.interface";

import {useState} from "react";

import ListOfCategories from "./CategoryList";

function CategoryItem({category, categories}: {category: Category; categories: Category[]}) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded((value) => !value);

  const hasSubCategories = categories.filter(({parentId}) => category.id === parentId).length;

  return (
    <li key={category.id} className="ml-2">
      {hasSubCategories ? (
        <button type="button" onClick={handleClick}>
          {expanded ? "-" : "+"}
        </button>
      ) : null}
      {category.name}
      {expanded ? <ListOfCategories categories={categories} parentCategory={category.id} /> : null}
    </li>
  );
}

export default CategoryItem;
