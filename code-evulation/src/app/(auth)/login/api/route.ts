import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// LoginApi Function
const LoginApi = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  if (!token) {
    cookieStore.set("authToken", "123");
    return NextResponse.json(
      { message: "Login successfully" },
      { status: 200 },
    );
  }
  return NextResponse.json({ message: "Already login" }, { status: 200 });
};

export { LoginApi as GET };
