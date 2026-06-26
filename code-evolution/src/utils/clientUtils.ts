import "client-only";

// clientUtils Function
const clientUtils = () => {
  console.log(
    "This log is from clientUtils Function, it can only visible in client terminal",
  );

  return "Result from clientUtils";
};

export default clientUtils;
