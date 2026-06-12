"use client";

import { usePathname } from "next/navigation";

// ReviewNotFoundPage Component
const ReviewNotFoundPage = () => {
  const pathName = usePathname().split("/");
  const productId = pathName[2];
  const reviewId = pathName[4];

  return (
    <div>
      <h1>
        Reviw - {reviewId} of product- {productId} is not found. Please check
        again.
      </h1>
    </div>
  );
};

export default ReviewNotFoundPage;
