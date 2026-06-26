import fs from "fs";

// ServerComponent3 Component
const ServerComponent3 = () => {
  const file = fs.readFileSync(
    "./src/components/interleaving/ServerComponent3.tsx",
    "utf-8",
  );
  console.log(file);
  return (
    <div>
      <h1>ServerComponent3 - inside ClientComponent1 as children passed</h1>
    </div>
  );
};

export default ServerComponent3;
