"use client";

import { useState } from "react";

// ClientComponent2 Component
const ClientComponent2 = () => {
  const [name, setName] = useState("Robin");
  return (
    <div>
      <h1>Welcome to the ClientComponent2 Component {name}</h1>
      <button onClick={() => setName("Robin")}>Change Name</button>
    </div>
  );
};

export default ClientComponent2;
