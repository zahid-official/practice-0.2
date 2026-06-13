import { NextRequest } from "next/server";
import { users } from "./data";

// Get Users
const GET = async (req: NextRequest) => {
  const searchTerm = req.nextUrl.searchParams.get("searchTerm") || "";
  const filteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return Response.json(filteredUser);
};

// Post Users
const POST = async (req: NextRequest) => {
  const data = await req.json();
  const newData = { id: users.length + 1, ...data };

  users.push(newData);
  return new Response(JSON.stringify(newData), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};

export { GET, POST };
