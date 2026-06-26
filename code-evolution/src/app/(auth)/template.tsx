"use client";

import { useState } from "react";

// AuthLayout Component
const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [defaultInput, setDefaultInput] = useState("");

  return (
    <div>
      <input
        value={defaultInput}
        onChange={(e) => setDefaultInput(e.target.value)}
        className="border p-2 m-5"
        type="text"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
