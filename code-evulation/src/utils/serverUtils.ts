"use server";

// serverUtils Function
const serverUtils = async () => {
  console.log(
    "This log is from serverUtils Function, it can only visible in server terminal",
  );

  return "Result from serverUtils";
};

export default serverUtils;
