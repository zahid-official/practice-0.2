import Navbar from "@/components/Navbar";
import { ILayoutProps } from "@/types";

// PublicLayout Component
const PublicLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen gap-5 px-5">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default PublicLayout;
