import { Button } from "@/components/ui/button";
import Link from "next/link";

// FetchingPage Component
const FetchingPage = () => {
  return (
    <div className="space-y-5">
      <h1>Welcome to the FetchingPage Component</h1>

      <Link href={"/fetching/client"}>
        <Button>Fetching with Client Side</Button>
      </Link>

      {/* <Link href={"/fetching/server"}>
        <Button>Server Fetching</Button>
      </Link> */}
    </div>
  );
};

export default FetchingPage;
