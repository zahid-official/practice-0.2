"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

// ClientRoutePage Component
const ClientRoutePage = () => {
  /* Note: 
    Here we cannot access serverUtils because of 'use client' directive, if we want to use serverUtils in client component, we have two options:
      1. Call the server action inside useEffect or any other client event handler
      2. Pass the result from server component to client component as a prop
  */

  return (
    <div className="space-y-4">
      <h1>Welcome to the ClientRoutePage Component</h1>

      <p>Client Result : {/*{serverUtils()} */} </p>

      <Link href="/rendering/composition-patterns">
        <Button>Back to Composition Patterns Page</Button>
      </Link>
    </div>
  );
};

export default ClientRoutePage;
