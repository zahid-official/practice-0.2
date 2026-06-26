import { Metadata } from "next";

interface IProps {
  params: Promise<{
    productId: string;
  }>;
}

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const id = (await params).productId;

  return {
    title: `Product-${id} | Code Evulation`,
  };
};

// ProductDetailsPage Component
const ProductDetailsPage = async ({ params }: IProps) => {
  const id = (await params).productId;

  return (
    <div>
      <h1>Product - {id} </h1>
    </div>
  );
};

export default ProductDetailsPage;
