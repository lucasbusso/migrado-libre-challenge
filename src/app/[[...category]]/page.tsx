import ProductList from "@/components/ProductList";
import {getProducts} from "@/services/getProducts";

export default async function ProductsListPage({
  params: {segments},
}: {
  params: {segments?: string[]};
}) {
  const category = segments?.[0];
  const products = await getProducts(category);

  return <ProductList products={products} />;
}
