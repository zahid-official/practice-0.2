"use client";

// Error Component
const Error = ({ error }: { error: Error }) => {
  return (
    <div>
      <h1>{error.message ? error.message : "Something went wrong!"}</h1>
    </div>
  );
};

export default Error;