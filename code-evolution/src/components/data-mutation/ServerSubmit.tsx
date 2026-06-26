"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

// ServerSubmit Component
const ServerSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full justify-center gap-2"
    >
      {pending ? (
        <>
          <Spinner />
          Adding...
        </>
      ) : (
        "Add Product"
      )}
    </Button>
  );
};

export default ServerSubmit;
