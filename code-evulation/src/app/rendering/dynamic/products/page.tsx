import { Button } from "@/components/ui/button";
import Link from "next/link";

// SSGProducts Component
const SSGProducts = () => {
  return (
    <div>
      <h1>Welcome to the SSG Products Component</h1>
      <p>Page rendered at {new Date().toLocaleTimeString()}</p>

      <div className="flex flex-col gap-4 py-8">
        {[1, 2, 3, 4, 5].map((product) => (
          <p key={product}>
            <Link href={`/rendering/dynamic/products/${product}`}>
              <Button>View Product {product}</Button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default SSGProducts;
