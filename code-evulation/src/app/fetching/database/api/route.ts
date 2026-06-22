import { createProduct } from "@/lib/db-operations";
import { NextResponse } from "next/server";

const POST = async (req: Request) => {
  try {
    const body = await req.json();
    await createProduct(body);
    return NextResponse.json(
      { message: "Product created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message || "Failed to create product" },
      { status: 500 },
    );
  }
};

export { POST };
