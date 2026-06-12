import { Button } from "@/components/ui/button";
import Link from "next/link";

// ArchivedNotifications Component
const ArchivedNotifications = () => {
  return (
    <div>
      <h1>Archived Notifications</h1>

      <Link
        href={"/dashboard"}
      >
        <Button>Archived Notifications</Button>
      </Link>
    </div>
  );
};

export default ArchivedNotifications;
