import ProductList from "@/components/ProductList";
import {getProducts} from "@/services/getProducts";

export default async function ProductsListPage({params: {category}}: {params: {category: string}}) {
  const products = await getProducts(category);

  return <ProductList products={products} />;
}
