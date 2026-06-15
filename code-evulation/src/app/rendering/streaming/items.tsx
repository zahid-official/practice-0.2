// StreamingItems Component
const StreamingItems = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return (
    <div>
      <h1>Welcome to the StreamingItems Component</h1>
      <p>Page rendered at {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default StreamingItems;
