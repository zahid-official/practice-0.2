"use server";

import { revalidatePath } from "next/cache";

export interface Errors {
  title?: string;
  description?: string;
  price?: string;
}

export interface FormState {
  errors?: Errors;
  success?: boolean;
  message?: string;
}

// addProduct serverAction
const addProduct = async (
  prevState: FormState | undefined,
  formData: FormData,
): Promise<FormState> => {
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
    return { errors, success: false, message: "Failed to create product" };
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
      const result = await res.json();
      return {
        errors: {},
        success: false,
        message: result.message || "Failed to create product",
      };
    }

    revalidatePath("/fetching/database");
    return {
      errors: {},
      success: true,
      message: "Product created successfully!",
    };
  } catch (error) {
    return {
      errors: {},
      success: false,
      message: (error as Error).message || "Failed to create product",
    };
  }
};

export { addProduct };
