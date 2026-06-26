import { Suspense } from "react";
import StreamingItems from "./items";
import StreamingReviews from "./reviews";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// StreamingPage Component
const StreamingPage = () => {
  return (
    <div className="space-y-4">
      <h1>Welcome to the StreamingPage Component</h1>
      <p>Page rendered at {new Date().toLocaleTimeString()}</p>

      <div className="space-y-4">
        <Suspense fallback={<p>Loading...</p>}>
          <StreamingItems />
        </Suspense>

        <Suspense fallback={<p>Loading...</p>}>
          <StreamingReviews />
        </Suspense>
      </div>

      <Link href={"/rendering"}>
        <Button>Back to Rendering Page</Button>
      </Link>
    </div>
  );
};

export default StreamingPage;
