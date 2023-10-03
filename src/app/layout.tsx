import type {Metadata} from "next";

import "./globals.css";

import {getProducts} from "@/services/getProducts";
import {getCategories} from "@/services/getCategories";
import ListOfCategories from "@/components/CategoryList";

export const metadata: Metadata = {
  title: "Migrado Libre",
  description: "La tienda de Don Miguel, libre de amarillos",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const products = await getProducts();
  const categories = await getCategories(products);

  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">Migrado Libre</header>
        <div className="grid grid-cols-[300px_1fr] gap-10">
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
