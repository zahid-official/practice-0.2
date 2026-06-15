import { Button } from "@/components/ui/button";
import serverUtils from "@/utils/serverUtils";
import Link from "next/link";

// ServerRoutePage Component
const ServerRoutePage = () => {
  return (
    <div className="space-y-4">
      <h1>Welcome to the ServerRoutePage Component</h1>

      <p>Server Result : {serverUtils()}</p>

      <Link href="/rendering/composition-patterns">
        <Button>Back to Composition Patterns Page</Button>
      </Link>
    </div>
  );
};

export default ServerRoutePage;
