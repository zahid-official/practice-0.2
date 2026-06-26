import fs from "fs";
import ServerComponent2 from "./ServerComponent2";
// ServerComponent1 Component
const ServerComponent1 = () => {
  const file = fs.readFileSync("./src/components/interleaving/ServerComponent1.tsx", "utf-8");
  console.log(file);
  return (
    <div>
      <h1>ServerComponent1</h1>
      <ServerComponent2 />
      
    </div>
  );
};

export default ServerComponent1;
