const functionText = () => {
  return <div>Test Text</div>;
};

// BlogPage Component
const BlogPage = async () => {
  await new Promise((resolve) =>
    setTimeout(() => resolve("Intentionally delayed"), 2000),
  );

  return (
    <div>
      <h1>Welcome to the BlogPage Component</h1>
      {functionText()}
    </div>
  );
};

export default BlogPage;
