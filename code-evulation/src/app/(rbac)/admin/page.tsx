import { Button } from "@/components/ui/button";
import { clerkClient } from "@clerk/nextjs/server";
import Form from "next/form";
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
        {users?.map((user, idx) => {
          const changeRole = makeAdmin.bind(null, {
            id: user.id,
            role: "ADMIN",
          });

          const removeRole = removeAdmin.bind(null, {
            id: user.id,
            role: "MODERATOR",
          });

          return (
            <div
              key={user.id}
              className="flex justify-between items-center gap-4 container mx-auto border border-gray-200 p-5"
            >
              {/* User Info */}
              <div className="flex gap-10">
                <p>
                  {idx + 1}. Name: {user.firstName} {user.lastName}
                </p>
                <p>Email: {user.emailAddresses[0].emailAddress}</p>
                <p>Role: {user.publicMetadata.role as Roles}</p>
              </div>

              {/* Actions */}
              <div>
                <Form
                  action={
                    user.publicMetadata.role === "ADMIN"
                      ? removeRole
                      : changeRole
                  }
                >
                  <Button type="submit">
                    {user.publicMetadata.role === "ADMIN"
                      ? "Remove Role"
                      : "Make Role Admin"}
                  </Button>
                </Form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPage;
