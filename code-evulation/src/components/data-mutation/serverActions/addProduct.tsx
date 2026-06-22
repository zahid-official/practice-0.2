"use server";

import { revalidatePath } from "next/cache";

export interface Errors {
  title?: string;
  description?: string;
  price?: string;
}

export interface FormState {
  errors?: Errors;
}

// addProduct serverAction
const addProduct = async (
  prevState: FormState | undefined,
  formData: FormData,
) => {
  const title = formData.get("title") as string;
  const description = (formData.get("description") as string) || null;
  const price = Number(formData.get("price"));
  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }
  if (!price) {
    errors.price = "Price is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
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

    console.log("Product create successfully");
    revalidatePath("/fetching/database");
  } catch (error) {
    throw new Error((error as Error).message || "Failed to create product");
  }
};

export { addProduct };
