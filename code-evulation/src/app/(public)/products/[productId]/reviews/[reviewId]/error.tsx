"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

interface IProps {
  error: Error;
  reset: () => void;
}

// ReviewError Component
const ReviewError = ({ error, reset }: IProps) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h1>{error.message}</h1>
      {/* <button>Try Again</button> */}
      <button
        onClick={reload}
        className="p-2 bg-neutral-900 rounded cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
};

export default ReviewError;
