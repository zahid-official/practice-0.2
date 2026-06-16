import { Button } from "@/components/ui/button";
import serverUtils from "@/utils/serverUtils";
import Link from "next/link";

// ServerRoutePage Component
const ServerRoutePage = () => {
  return (
    <div className="space-y-4">
      <h1>Welcome to the ServerRoutePage Component</h1>

      <p>Server Result for serverUtils: {serverUtils()}</p>
      <p>Client Result for clientUtils: {/* {clientUtils()} */} </p>

      <Link href="/rendering/composition-patterns">
        <Button>Back to Composition Patterns Page</Button>
      </Link>
    </div>
  );
};

export default ServerRoutePage;
