// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// // proxy Function
// const proxy = async (req: NextRequest) => {
//   const response = NextResponse.next();

//   const cookieStore = await cookies();
//   const token = cookieStore.get("authToken")?.value;
//   if (!token) {
//     console.log("Token not found! Please Login");
//     return NextResponse.redirect(new URL("/login/api", req.url));
//   }

//   const timeZone = cookieStore.get("time-zone")?.value;
//   if (!timeZone) {
//     cookieStore.set("time-zone", "Asia-Dhaka");
//   }

//   // Add a custom header to the response header for debugging
//   response.headers.set("custom-header", "Custom header added by proxy");

//   return response;
// };

// export const config = {
//   matcher: "/time",
// };

// export { proxy };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/authentication(.*)"]);
const isAdmin = createRouteMatcher(["/admin(.*)"]);
const isModerator = createRouteMatcher(["/moderator(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Check for protected routes
  if (isProtectedRoute(req)) await auth.protect();

  if (isAdmin(req) || isModerator(req)) {
    const { sessionClaims } = await auth();

    // Check for ADMIN role
    if (isAdmin(req) && sessionClaims?.metadata?.role !== "ADMIN")
      return NextResponse.redirect(new URL("/", req.url));

    // Check for MODERATOR role
    if (isModerator(req) && sessionClaims?.metadata?.role !== "MODERATOR")
      return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for Clerk's auto-proxy path
    "/__clerk/:path*",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
