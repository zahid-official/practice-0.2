import { Button } from "@/components/ui/button";
import { clerkClient } from "@clerk/nextjs/server";
import { Roles } from "../../../../types/globals";
import { makeAdmin, removeAdmin } from "./changeRole";

// AdminPage Component
const AdminPage = async () => {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  return (
    <div className="py-10 space-y-10">
      <h1 className="text-2xl font-semibold underline text-center">
        Admin Panel
      </h1>

      <div>
        {users?.map((user, idx) => (
          <div
            key={user.id}
            className="flex justify-between items-center gap-4 container mx-auto border border-gray-200 p-5"
          >
            {/* User Info */}
            <div className="flex gap-10">
              <p>
                {idx + 1}. Name: {user.firstName} {user.lastName}
              </p>
              <p>Email: {user.emailAddresses[0]?.emailAddress ?? "N/A"}</p>
              <p>Role: {user.publicMetadata.role as Roles}</p>
            </div>

            {/* Actions */}
            <div>
              <form
                action={
                  user.publicMetadata.role === "ADMIN" ? removeAdmin : makeAdmin
                }
              >
                <input type="hidden" value={user.id} name="id" />
                <input
                  type="hidden"
                  value={
                    user.publicMetadata.role === "ADMIN" ? "MODERATOR" : "ADMIN"
                  }
                  name="role"
                />
                <Button type="submit">
                  {user.publicMetadata.role === "ADMIN"
                    ? "Remove Role"
                    : "Make Role Admin"}
                </Button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
