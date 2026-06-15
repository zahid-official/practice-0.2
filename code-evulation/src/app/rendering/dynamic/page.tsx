import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Link from "next/link";

// DynamicPage Component
const DynamicPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  return (
    <div className="flex flex-col gap-5">
      <h1>Welcome to the DynamicPage Component</h1>
      <p>Page rendered at {new Date().toLocaleTimeString()}</p>
      
      <Link href={"/rendering"}>
        <Button>Back to Rendering Page</Button>
      </Link>

      <p>Token: {token ? token : "Not found, Please login"}</p>

      <Link href={"/rendering/dynamic/products"}>
        <Button>Go to products for SSG</Button>
      </Link>
    </div>
  );
};

export default DynamicPage;
