import { createProduct } from "@/lib/db-operations";
import { NextResponse } from "next/server";

const POST = async (req: Request) => {
  const body = await req.json();
  await createProduct(body);
  return NextResponse.json(
    { message: "Product created successfully" },
    { status: 201 },
  );
};

export { POST };
