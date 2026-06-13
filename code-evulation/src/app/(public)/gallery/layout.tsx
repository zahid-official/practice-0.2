// GalleryLayout Component
const GalleryLayout = ({
  children,
  dialog,
}: {
  children: React.ReactNode;
  dialog: React.ReactNode;
}) => {
  return (
    <div>
      {dialog}
      {children}
    </div>
  );
};

export default GalleryLayout;
