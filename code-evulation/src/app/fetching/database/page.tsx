import CreateProductServer from "@/components/data-mutation/CreateProductServer";
import { getAllProducts } from "@/lib/db-operations";
import { Product } from "../../../../generated/prisma/client";

// DatabasePage Component
const DatabasePage = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Database Fetching & Mutation
        </h1>
        <p className="text-muted-foreground text-lg">
          Add new products using Next.js Server Actions and list them directly
          from the SQLite database.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left: Create Form */}
        <div className="lg:col-span-1 lg:sticky lg:top-8">
          <CreateProductServer />
        </div>

        {/* Right: Product List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
            All Products ({products.length})
          </h2>
          {products.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No products found. Add some above!
            </p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="bg-card hover:bg-accent/40 transition-colors border rounded-xl p-5 flex flex-col justify-between shadow-sm space-y-4"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {product.title}
                    </h3>
                    {product.description && (
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {product.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between border-t pt-3">
                    <span className="text-xs text-muted-foreground font-mono">
                      ID: #{product.id}
                    </span>
                    <span className="text-base font-bold text-primary">
                      ${product.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatabasePage;
