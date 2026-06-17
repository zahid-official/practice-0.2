import fs from "fs";
// ServerComponent1 Component
const ServerComponent1 = () => {
  const file = fs.readFileSync("./src/app/");
  console.log(file);
  return (
    <div>
      <h1>Welcome to the ServerComponent1 Component</h1>
    </div>
  );
};

export default ServerComponent1;
