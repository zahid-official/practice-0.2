// DynamicProductLayout Component
const DynamicProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h1>Feature Products</h1>
    </div>
  );
};

export default DynamicProductLayout;
