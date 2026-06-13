import { users } from "./data";

// Get Users
const GET = async () => {
  return Response.json(users);
};

// Post Users
const POST = async (request: Request) => {
  const data = await request.json();
  const newData = { id: users.length + 1, ...data };

  users.push(newData);
  return new Response(JSON.stringify(newData), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};

export { GET, POST };
