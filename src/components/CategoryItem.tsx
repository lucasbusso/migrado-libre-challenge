"use client";
import type {Category} from "@/models/category.interface";

import {useState} from "react";
import Link from "next/link";

import ListOfCategories from "./CategoryList";

function CategoryItem({category, categories}: {category: Category; categories: Category[]}) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded((value) => !value);

  const hasSubCategories = categories.filter(({parentId}) => category.id === parentId).length;

  return (
    <li key={category.id} className="ml-2">
      {hasSubCategories ? (
        <button className="mr-2" type="button" onClick={handleClick}>
          {expanded ? "-" : "+"}
        </button>
      ) : null}
      <Link href={`/${category.id}`}>{category.name}</Link>
      {expanded ? <ListOfCategories categories={categories} parentCategory={category.id} /> : null}
    </li>
  );
}

export default CategoryItem;
