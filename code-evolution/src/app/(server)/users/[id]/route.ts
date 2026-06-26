import { NextRequest } from "next/server";
import { users } from "../data";

interface IProps {
  params: Promise<{ id: string }>;
}

// Get User Dynamically Function
const GET = async (_req: NextRequest, { params }: IProps) => {
  const { id } = await params;
  const selectedUser = users.find((user) => user.id === Number(id));

  // If not found, return 404
  if (!selectedUser) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  return Response.json(selectedUser);
};

// Update User Dynamically Function
const PATCH = async (req: NextRequest, { params }: IProps) => {
  const { id } = await params;
  const body = await req.json();
  const userIndex = users.findIndex((user) => user.id === Number(id));

  if (userIndex === -1) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  const updatedUser = { ...users[userIndex], ...body };
  users[userIndex] = updatedUser;

  return Response.json(updatedUser);
};

const DELETE = async (_req: NextRequest, { params }: IProps) => {
  const { id } = await params;
  const userIndex = users.findIndex((user) => user.id === Number(id));

  if (userIndex === -1) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);
  console.log(users);
  return Response.json(deletedUser);
};

export { GET, PATCH, DELETE };
