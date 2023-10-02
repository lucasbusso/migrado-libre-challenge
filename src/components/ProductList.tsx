import type {Product} from "@/models/product.type";

function ProductList({products}: {products: Product[]}) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
      {products.map(({id, thumbnail, title, price, currency_id}) => (
        <li key={id}>
          <img alt={title} src={thumbnail} />
          <h3>{title}</h3>
          <p>
            {price.toLocaleString("es-AR", {
              currency: currency_id,
              style: "currency",
            })}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
