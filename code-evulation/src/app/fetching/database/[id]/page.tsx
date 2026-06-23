import UpdateProdcutServer from "@/components/data-mutation/UpdateProdcutServer";
import { getProduct } from "@/lib/db-operations";

interface IProps {
  params: Promise<{ id: string }>;
}

// UpdateDynamicProductPage Component
const UpdateDynamicProductPage = async ({ params }: IProps) => {
  const { id } = await params;
  const product = await getProduct(Number(id));

  return (
    <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
      <UpdateProdcutServer product={product} />
    </div>
  );
};

export default UpdateDynamicProductPage;
