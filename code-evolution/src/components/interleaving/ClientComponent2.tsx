"use client";

import { useState } from "react";
import { Button } from "../ui/button";

// ClientComponent2 Component
const ClientComponent2 = () => {
  const [name, setName] = useState("Robin");
  return (
    <div className="mt-5">
      <h1>ClientComponent2{name}</h1>
      <Button onClick={() => setName("Zahid")}>
        Change Name from ClientComponent2
      </Button>
    </div>
  );
};

export default ClientComponent2;
