"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Product } from "../../../generated/prisma/client";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import editProduct from "./serverActions/editProduct";

// UpdateProdcutServer Component
const UpdateProdcutServer = ({ product }: { product: Product }) => {
  const editProductWithId = editProduct.bind(null, product?.id);
  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    null,
  );

  useEffect(() => {
    if (state?.success && state?.message) {
      toast.success(state?.message || "Product updated successfully");
    } else if (!state?.success && state?.message) {
      toast.error(state?.message || "Failed to update product");
    }
  }, [state]);

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-card border rounded-xl shadow-lg space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Update Product</h2>
        <p className="text-sm text-muted-foreground">
          Fill in the details below to update product.
        </p>
      </div>

      {/* Form */}
      <form action={formAction} className="space-y-4">
        {/* title */}
        <Field>
          <FieldLabel htmlFor="title" className="text-sm font-medium">
            Product Title
          </FieldLabel>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={product.title}
            placeholder="e.g. Wireless Headset"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </Field>

        {/* description */}
        <Field>
          <FieldLabel htmlFor="description" className="text-sm font-medium">
            Description
          </FieldLabel>
          <textarea
            id="description"
            name="description"
            defaultValue={product.description ?? ""}
            placeholder="Describe your product details..."
            rows={3}
            className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          />
        </Field>

        {/* price */}
        <Field>
          <FieldLabel htmlFor="price" className="text-sm font-medium">
            Price (USD)
          </FieldLabel>
          <input
            id="price"
            name="price"
            type="number"
            defaultValue={product.price}
            min="0"
            placeholder="e.g. 99"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </Field>

        {/* button submit */}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full justify-center gap-2"
        >
          {isPending ? (
            <>
              <Spinner />
              Updating...
            </>
          ) : (
            "Update Product"
          )}
        </Button>
      </form>
    </div>
  );
};

export default UpdateProdcutServer;
