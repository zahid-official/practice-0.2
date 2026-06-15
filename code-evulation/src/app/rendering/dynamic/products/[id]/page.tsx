import { Button } from "@/components/ui/button";
import Link from "next/link";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }];
};

interface IProps {
  params: Promise<{ id: string }>;
}

// SSGDynamicProduct Component
const SSGDynamicProduct = async ({ params }: IProps) => {
  const { id } = await params;
  return (
    <div className="space-y-5">
      <h1>Welcome to the SSG Dynamic Product Component</h1>
      <p>
        Product ID: {id}, <br /> page rendered at{" "}
        {new Date().toLocaleTimeString()}
      </p>

      <Link href={"/rendering/dynamic/products"}>
        <Button>Back to products</Button>
      </Link>
    </div>
  );
};

export default SSGDynamicProduct;
