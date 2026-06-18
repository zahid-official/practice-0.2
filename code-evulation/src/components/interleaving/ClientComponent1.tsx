"use client";

import { useState } from "react";
import ClientComponent2 from "./ClientComponent2";
import { Button } from "../ui/button";

// ClientComponent1 Component
const ClientComponent1 = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("Robin");

  return (
    <div className="mt-5">
      <h1>ClientComponent1 {name}</h1>
      <Button onClick={() => setName("Zahid")}>
        Change Name from ClientComponent1
      </Button>

      {children}
      <ClientComponent2 />
    </div>
  );
};

export default ClientComponent1;
