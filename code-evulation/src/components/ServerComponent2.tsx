import fs from "fs";

// ServerComponent2 Component
const ServerComponent2 = () => {
  const file = fs.readFileSync("./src/app/");
  console.log(file);
  return (
    <div>
      <h1>Welcome to the ServerComponent2 Component</h1>
    </div>
  );
};

export default ServerComponent2;
