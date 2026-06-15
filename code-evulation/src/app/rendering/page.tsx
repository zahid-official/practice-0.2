import { Button } from "@/components/ui/button";
import Link from "next/link";

// RenderingPage Component
const RenderingPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col gap-2 justify-center items-center">
      <Link href={"/rendering/static"}>
        <Button>Static Rendering</Button>
      </Link>

      <Link href={"/rendering/dynamic"}>
        <Button>Dynamic Rendering</Button>
      </Link>

      <Link href={"/rendering/streaming"}>
        <Button>Streaming</Button>
      </Link>
    </div>
  );
};

export default RenderingPage;
