import { deleteProduct, updateProduct } from "@/lib/db-operations";
import { NextRequest, NextResponse } from "next/server";

interface IProps {
  params: Promise<{ id: string }>;
}

// PATCH request to update a product
const PATCH = async (req: NextRequest, { params }: IProps) => {
  try {
    const { id } = await params;
    const body = await req.json();
    await updateProduct(body, Number(id));
    return NextResponse.json(
      { message: "Product updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message || "Failed to update product" },
      { status: 500 },
    );
  }
};

// DELETE Product API
const DELETE = async (req: NextRequest, { params }: IProps) => {
  try {
    const { id } = await params;
    await deleteProduct(Number(id));
    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message || "Failed to delete product" },
      { status: 500 },
    );
  }
};

export { PATCH, DELETE };
