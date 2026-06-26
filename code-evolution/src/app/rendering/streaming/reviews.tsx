// StreamingReviews Component
const StreamingReviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <h1>Welcome to the StreamingReviews Component</h1>
      <p>Page rendered at {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default StreamingReviews;
