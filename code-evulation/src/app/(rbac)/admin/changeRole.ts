"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { Roles } from "../../../../types/globals";

// updateUserRole Helper Function
const updateUserRole = async (formData: FormData) => {
  const { sessionClaims, userId } = await auth();
  const id = formData.get("id") as string;
  const role = formData.get("role") as Roles;

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
const makeAdmin = async (formData: FormData) => {
  await updateUserRole(formData);
  console.log("Role changed successfully");
};

// removeAdmin serverAction
const removeAdmin = async (formData: FormData) => {
  await updateUserRole(formData);
  console.log("Role removed successfully");
};

export { makeAdmin, removeAdmin };
