import Link from "next/link";

// ArchivedNotifications Component
const ArchivedNotifications = () => {
  return (
    <div>
      <h1>Archived Notifications</h1>

      <Link
        href={"/dashboard"}
        className="p-3 bg-slate-800 rounded mt-3 block"
      >
        <button>Archived Notifications</button>
      </Link>
    </div>
  );
};

export default ArchivedNotifications;
