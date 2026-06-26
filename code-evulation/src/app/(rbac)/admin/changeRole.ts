"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// updateUserRole Helper Function
const updateUserRole = async (id: string, role: string) => {
  const { sessionClaims, userId } = await auth();
  if (userId === id) {
    throw new Error("You are not authorized to change your own role.");
  }

  if (sessionClaims?.metadata?.role !== "ADMIN") {
    throw new Error("You are not authorized to change the role.");
  }

  const client = await clerkClient();
  try {
    await client.users.updateUser(id, {
      publicMetadata: {
        role: role,
      },
    });
    revalidatePath("/admin");
  } catch (error) {
    console.log("Error changing role:", error);
    throw error;
  }
};

// makeAdmin serverAction
const makeAdmin = async ({ id, role }: { id: string; role: string }) => {
  await updateUserRole(id, role);
  console.log("Role changed successfully");
};

// removeAdmin serverAction
const removeAdmin = async ({ id, role }: { id: string; role: string }) => {
  await updateUserRole(id, role);
  console.log("Role removed successfully");
};

export { makeAdmin, removeAdmin };
