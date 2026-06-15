"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// CompositionPatternsPage Component
const CompositionPatternsPage = () => {
  return (
    <div className="space-y-4">
      <h1>Welcome to the CompositionPatternsPage Component</h1>
      <p>Page rendered at {new Date().toLocaleTimeString()}</p>

      <div className="space-x-4">
        <Link href={"/rendering/composition-patterns/server-route"}>
          <Button>Server Route</Button>
        </Link>

        <Link href={"/rendering/composition-patterns/client-route"}>
          <Button>Client Route</Button>
        </Link>
      </div>

      <Link href={"/rendering"}>
        <Button>Back to Rendering Page</Button>
      </Link>
    </div>
  );
};

export default CompositionPatternsPage;
