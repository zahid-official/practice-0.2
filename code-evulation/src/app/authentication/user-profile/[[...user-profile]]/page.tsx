import { UserProfile } from "@clerk/nextjs";

// UserProfilePage Component
const UserProfilePage = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <UserProfile path="/authentication/user-profile" />
    </div>
  );
};

export default UserProfilePage;
