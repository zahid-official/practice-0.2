import { SignUp } from "@clerk/nextjs";

// SignUpPage Component
const SignUpPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex justify-center items-center">
      <SignUp></SignUp>
    </div>
  );
};

export default SignUpPage;
