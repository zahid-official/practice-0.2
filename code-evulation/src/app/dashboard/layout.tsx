interface ILayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}

// DashboardPage Component
const DashboardPage = ({
  children,
  users,
  revenue,
  notifications,
}: ILayoutProps) => {
  return (
    <div>
      <main className="px-20 py-10 space-y-10 text-center">
        <section>{children}</section>

        <section className="grid grid-cols-2 gap-10">
          <div className="space-y-5">
            <div className="border py-20">{users}</div>
            <div className="border py-20">{revenue}</div>
          </div>

          <div className="border flex justify-center items-center">
            {notifications}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
