import { notFound } from "next/navigation";

interface IProps {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}

const ramdomNumber = (num: number) => {
  return Math.floor(Math.random() * num);
};

// ReviewDetailsPage Component
const ReviewDetailsPage = async ({ params }: IProps) => {
  const { productId, reviewId } = await params;

  if (Number(reviewId) > 100) {
    notFound();
  }

  const random = ramdomNumber(2);
  if (random === 1) {
    throw new Error("Something went wrong! Zahid");
  }

  return (
    <div>
      <h1>
        Review-{reviewId} for product-{productId}
      </h1>
    </div>
  );
};

export default ReviewDetailsPage;
