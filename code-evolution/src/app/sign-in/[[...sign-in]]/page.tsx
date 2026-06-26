import { SignIn } from "@clerk/nextjs";

// SignInPage Component
const SignInPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex justify-center items-center">
      <SignIn></SignIn>
    </div>
  );
};

export default SignInPage;
