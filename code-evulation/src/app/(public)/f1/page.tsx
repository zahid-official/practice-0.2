import { Button } from "@/components/ui/button";
import Link from "next/link";

// SourceFolder Component
const SourceFolder = () => {
  return (
    <div>
      <h1>Welcome to the Source Folder Component</h1>
      <Link href={"/f3"}>
        <Button>Go to Target Folder</Button>
      </Link>
    </div>
  );
};

export default SourceFolder;
