import UpdateProdcutServer from "@/components/data-mutation/UpdateProdcutServer";
import { getProduct } from "@/lib/db-operations";

interface IProps {
  params: Promise<{ id: string }>;
}

// UpdateDynamicProductPage Component
const UpdateDynamicProductPage = async ({ params }: IProps) => {
  const { id } = await params;
  const product = await getProduct(Number(id));

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-10rem)] space-y-4">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <p className="text-muted-foreground">
          The product with ID #{id} could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
      <UpdateProdcutServer product={product} />
    </div>
  );
};

export default UpdateDynamicProductPage;
