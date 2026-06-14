import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// proxy Function
const proxy = async (req: NextRequest) => {
  const response = NextResponse.next();

  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;
  if (!token) {
    console.log("Token not found! Please Login");
    return NextResponse.redirect(new URL("/login/api", req.url));
  }

  const timeZone = cookieStore.get("time-zone")?.value;
  if (!timeZone) {
    cookieStore.set("time-zone", "Asia-Dhaka");
  }

  // Add a custom header to the response header for debugging
  response.headers.set("custom-header", "Custom header added by proxy");

  return response;
};

export const config = {
  matcher: "/time",
};

export { proxy };
