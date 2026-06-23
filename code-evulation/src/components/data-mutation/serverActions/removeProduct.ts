"use server";

import { revalidatePath } from "next/cache";

// removeProduct serverAction
const removeProduct = async (id: number) => {
  try {
    const res = await fetch(
      `http://localhost:3000/fetching/database/api/${id}`,
      {
        method: "DELETE",
      },
    );

    if (!res.ok) {
      return { success: false, message: "Failed to delete product" };
    }
    revalidatePath("/fetching/database");
    return { success: true, message: "Product removed successfully!" };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Failed to delete product",
    };
  }
};

export default removeProduct;
