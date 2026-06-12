import { Button } from "@/components/ui/button";
import Link from "next/link";

// TargetFolder Component
const TargetFolder = () => {
  return (
    <div>
      <h1>Welcome to the One Level Above Target F3 Folder Component</h1>
      <Link href={"/f1"}>
        <Button>Return to Source Folder</Button>
      </Link>
    </div>
  );
};

export default TargetFolder;
