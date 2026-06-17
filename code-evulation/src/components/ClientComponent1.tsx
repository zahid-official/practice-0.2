"use client";

import { useState } from "react";

// ClientComponent1 Component
const ClientComponent1 = () => {
  const [name, setName] = useState("Robin");

  return (
    <div>
      <h1>Welcome to the ClientComponent1 Component {name}</h1>
      <button onClick={() => setName("Robin")}>Change Name</button>
    </div>
  );
};

export default ClientComponent1;
