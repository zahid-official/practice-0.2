import { Button } from "@/components/ui/button";
import Link from "next/link";

// FetchingPage Component
const FetchingPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Welcome to the FetchingPage Component</h1>

      <Link href={"/fetching/client"}>
        <Button>Fetching with Client Side</Button>
      </Link>

      <Link href={"/fetching/server"}>
        <Button>Fetching with Server</Button>
      </Link>

      <Link href={"/fetching/sequential"}>
        <Button>Sequential Data Fetching</Button>
      </Link>

      <Link href={"/fetching/parallel"}>
        <Button>Parallel Data Fetching</Button>
      </Link>

      <Link href={"/fetching/database"}>
        <Button>Fetching from Database</Button>
      </Link>
    </div>
  );
};

export default FetchingPage;
