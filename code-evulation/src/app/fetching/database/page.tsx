import { getAllProducts } from "@/lib/db-operations";
import { Product } from "../../../../generated/prisma/client";

// DatabasePage Component
const DatabasePage = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <div>
      <h1 className="">Welcome to the DatabasePage Component</h1>

      <h1 className="text-4xl underline underline-offset-4 font-semibold mt-8 text-center">
        All Products - {products.length}
      </h1>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 list-decimal list-inside space-y-4 mx-8 py-5">
        {products.map((product) => (
          <li key={product.id} className="space-y-2 border p-4">
            <h2>Title: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatabasePage;
