import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { images } from "../../images";

interface IProps {
  params: Promise<{ id: string }>;
}

// InterceptingDynamicImage Component
const InterceptingDynamicImage = async ({ params }: IProps) => {
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
    <Dialog defaultOpen={true}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-2xl rounded-lg overflow-hidden p-6"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">{selectedImage.title}</DialogTitle>
          <DialogDescription>{selectedImage.description}</DialogDescription>
        </DialogHeader>

        <div className="relative w-full h-100 overflow-hidden rounded-md mt-3">
          <Image
            src={selectedImage.src}
            alt={selectedImage.title}
            height={1080}
            width={1920}
            quality={100}
            loading="eager"
            className="object-cover"
            suppressHydrationWarning
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InterceptingDynamicImage;
