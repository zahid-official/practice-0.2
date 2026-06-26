import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

// GET Function
const getProfileApi = async () => {
  // Headers
  const headersList = (await headers()).get("Authorization")?.split(" ");
  if (!headersList) {
    return new Response("Authentication required", { status: 401 });
  }
  const headersToken = headersList[1];

  // Cookies
  const cookieStore = await cookies();
  cookieStore.set("theme", "dark"); // set cookie using cookies method
  const cookieTheme = cookieStore.get("theme")?.value;
  console.log({ cookieTheme });

  // Redirect if cookie is not present
  const checkCookie = cookieStore.has("authToken");
  console.log(checkCookie);
  if (!checkCookie) {
    redirect("/");
  }

  // cookieStore.delete("authToken");

  // Response
  return new Response(`<h1>Profile API Data</h1>`, {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": `authToken=${headersToken}`, // set cookie using headers response
    },
  });
};

export { getProfileApi as GET };
