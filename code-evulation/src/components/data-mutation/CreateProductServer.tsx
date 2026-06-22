/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, FieldLabel } from "@/components/ui/field";
import { revalidatePath } from "next/cache";
import ServerSubmit from "./ServerSubmit";

// addProduct serverAction
const addProduct = async (formData: FormData) => {
  "use server";

  const title = formData.get("title") as string;
  const description = (formData.get("description") as string) || null;
  const price = Number(formData.get("price"));

  if (!title || !price) {
    throw new Error("Title and price are required");
  }
  try {
    const res = await fetch("http://localhost:3000/fetching/database/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, price }),
    });

    if (!res.ok) {
      throw new Error("Failed to create product");
    }

    revalidatePath("/fetching/database");
    console.log("Product create successfully");
  } catch (error: any) {
    throw new Error(error.message || "Failed to create product");
  }
};

// CreateProductServer Component
const CreateProductServer = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-card border rounded-xl shadow-lg space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Add New Product</h2>
        <p className="text-sm text-muted-foreground">
          Fill in the details below to add a new product.
        </p>
      </div>

      {/* Form */}
      <form action={addProduct} className="space-y-4">
        <Field>
          <FieldLabel htmlFor="title" className="text-sm font-medium">
            Product Title
          </FieldLabel>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="e.g. Wireless Headset"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="description" className="text-sm font-medium">
            Description
          </FieldLabel>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your product details..."
            rows={3}
            className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="price" className="text-sm font-medium">
            Price (USD)
          </FieldLabel>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            required
            placeholder="e.g. 99"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </Field>

        <ServerSubmit />
      </form>
    </div>
  );
};

export default CreateProductServer;
