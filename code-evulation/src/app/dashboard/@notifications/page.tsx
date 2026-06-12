import Link from "next/link";

// AppNotifications Component
const AppNotifications = () => {
  return (
    <div>
      <h1>App Notifications</h1>

      <Link href={"/dashboard/archived"} className="p-3 bg-slate-800 rounded mt-3 block">
        <button>Archived Notifications</button>
      </Link>
    </div>
  );
};

export default AppNotifications;
