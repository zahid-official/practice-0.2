import { cookies, headers } from "next/headers";

// GET Function
const getProfileApi = async () => {
  // headers
  const headersList = (await headers()).get("Authorization")?.split(" ");
  if (!headersList) {
    return new Response("Authentication required", { status: 401 });
  }
  const headersToken = headersList[1];

  // cookies
  const cookieStore = await cookies();
  cookieStore.set("theme", "dark"); // set cookie using cookies method
  const cookieTheme = cookieStore.get("theme")?.value;
  console.log({ cookieTheme });

  // cookieStore.delete("authToken");
  const checkCookie = cookieStore.has("authToken");
  console.log(checkCookie);

  // response
  return new Response(`<h1>Profile API Data</h1>`, {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": `authToken=${headersToken}`, // set cookie using headers response
    },
  });
};

export { getProfileApi as GET };
