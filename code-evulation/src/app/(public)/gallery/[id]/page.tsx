import Image from "next/image";
import { images } from "../images";

interface IProps {
  params: Promise<{ id: string }>;
}

// DynamicImage Component
const DynamicImage = async ({ params }: IProps) => {
  const { id } = await params;

  const selectedImage = images.find((img) => img.id === id);
  if (!selectedImage) {
    return (
      <div className="flex flex-col justify-center items-center space-y-4 py-10 font-semibold text-3xl capitalize underline underline-offset-6">
        no data found
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-10">
      <Image
        src={selectedImage.src}
        alt={selectedImage.title}
        height={1080}
        width={1920}
        quality={100}
        loading="eager"
        className="max-w-2xl"
        suppressHydrationWarning
      />

      <h1 className="font-semibold text-3xl">{selectedImage.title}</h1>
      <p className="text-sm max-w-2xl text-center px-5">
        {selectedImage.description}
      </p>
    </div>
  );
};

export default DynamicImage;
