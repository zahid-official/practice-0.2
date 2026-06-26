import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// StaticPage Component
const StaticPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Welcome to the StaticPage Component</h1>
      <Link href={"/rendering"}>
        <Button>Back to Rendering Page</Button>
      </Link>

      <Image
        src={"/assets/1.jpg"}
        alt="sample image"
        height={1080}
        width={1920}
        quality={100}
        className="max-w-2xl"
        loading="eager"
      />
    </div>
  );
};

export default StaticPage;
