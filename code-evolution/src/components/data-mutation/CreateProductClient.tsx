"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";
import { Loader2 } from "lucide-react";

// CreateProductClient Component
const CreateProductClient = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const description = (formData.get("description") as string) || null;
    const price = Number(formData.get("price"));

    if (!title || !price) {
      setStatus({ type: "error", text: "Title and price are required" });
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/fetching/database/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            price,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setStatus({
            type: "success",
            text: data.message || "Product created successfully",
          });
          form.reset();
          router.refresh();
        } else {
          setStatus({
            type: "error",
            text: data.message || "Something went wrong",
          });
        }
      } catch (error) {
        console.error("Error creating product:", error);
        setStatus({ type: "error", text: "Failed to connect to the server" });
      }
    });
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-card border rounded-xl shadow-lg space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">Add New Product</h2>
        <p className="text-sm text-muted-foreground">
          Fill in the details below to add a new product.
        </p>
      </div>

      {status && (
        <div
          className={`p-3 rounded-lg text-sm border ${
            status.type === "success"
              ? "bg-emerald-500/15 text-emerald-500 border-emerald-500/20"
              : "bg-destructive/15 text-destructive border-destructive/20"
          }`}
        >
          {status.text}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <Button
          type="submit"
          disabled={isPending}
          className="w-full justify-center gap-2"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Adding Product...
            </>
          ) : (
            "Add Product"
          )}
        </Button>
      </form>
    </div>
  );
};

export default CreateProductClient;
