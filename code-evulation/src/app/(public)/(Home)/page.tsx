import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Home | Code Evulation",
  },
  description: "This Home page created by Zahidul Islam",
};

// HomePage Component
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the HomePage Component</h1>
    </div>
  );
};

export default HomePage;
