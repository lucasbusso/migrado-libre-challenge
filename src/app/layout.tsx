import type {Metadata} from "next";

import "./globals.css";
import type {Category} from "@/models/category.interface";

import {getProducts} from "@/services/getProducts";
import {getCategories} from "@/services/getCategories";

export const metadata: Metadata = {
  title: "Migrado Libre",
  description: "La tienda de Don Miguel, libre de amarillos",
};

function ListOfCategories({categories}: {categories: Category[]}) {
  const rootCategories = categories.filter(({parentId}) => !parentId);

  return (
    <ul>
      {rootCategories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const products = await getProducts();
  const categories = await getCategories(products);

  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">Migrado Libre</header>
        <div>
          <aside>
            <ListOfCategories categories={categories} />
          </aside>
          <main className="py-8">{children}</main>
        </div>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Don Miguel
        </footer>
      </body>
    </html>
  );
}
