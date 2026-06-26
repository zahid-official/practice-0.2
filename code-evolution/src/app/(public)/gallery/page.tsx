import Image from "next/image";
import Link from "next/link";
import { images } from "./images";

// GalleryPage Component
const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-center py-10 text-3xl font-semibold underline underline-offset-6">
        Image Gallery Page
      </h1>

      <div className="container mx-auto grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id}>
            <Link href={`/gallery/${image.id}`}>
              <Image
                src={image.src}
                alt={image.title}
                height={1080}
                width={1920}
                quality={100}
                preload={true}
                suppressHydrationWarning
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
