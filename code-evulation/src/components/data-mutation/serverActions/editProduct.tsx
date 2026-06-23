"use server";

export interface EditFormState {
  errors?: string;
  success?: boolean;
  message?: string;
}

// editProduct Component
const editProduct = async (
  id: number,
  prevState: EditFormState | undefined | null,
  formData: FormData,
): Promise<EditFormState> => {
  const title = formData.get("title") as string;
  const description = (formData.get("description") as string) || null;
  const price = Number(formData.get("price"));
  let errors = "";

  if (!title && !description && !price) {
    errors =
      "At least one field (title, description, or price) must be provided";
    return {
      errors,
      success: false,
      message: errors,
    };
  }

  try {
    const res = await fetch(
      `http://localhost:3000/fetching/database/api/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, price }),
      },
    );

    if (!res.ok) {
      const result = await res.json();
      return {
        success: false,
        message: result.message || "Failed to update product",
        errors: "",
      };
    }

    return {
      errors: "",
      success: true,
      message: "Product updated successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Failed to update product",
      errors: "",
    };
  }
};

export default editProduct;
