import { Button } from "@/components/ui/button";
import Link from "next/link";

// AppNotifications Component
const AppNotifications = () => {
  return (
    <div>
      <h1>App Notifications</h1>

      <Link href={"/dashboard/archived"}>
        <Button>Archived Notifications</Button>
      </Link>
    </div>
  );
};

export default AppNotifications;
