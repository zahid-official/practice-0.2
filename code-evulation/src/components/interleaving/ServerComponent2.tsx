import fs from "fs";
import ClientComponent1 from "./ClientComponent1";
import ServerComponent3 from "./ServerComponent3";

// ServerComponent2 Component
const ServerComponent2 = () => {
  const file = fs.readFileSync(
    "./src/components/interleaving/ServerComponent2.tsx",
    "utf-8",
  );
  console.log(file);
  return (
    <div>
      <h1>ServerComponent2</h1>

      {/* Client Component Boundary */}
      <ClientComponent1>
        {/* Server Component */}
        <ServerComponent3 />
      </ClientComponent1>
    </div>
  );
};

export default ServerComponent2;
