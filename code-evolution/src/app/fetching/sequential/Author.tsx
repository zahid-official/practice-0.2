interface IAuthor {
  id: number;
  name: string;
}

// Author Component
const Author = async ({ userId }: { userId: number }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  if (!res.ok) throw new Error("Failed to fetch Author");

  const author: IAuthor = await res.json();

  return (
    <>
      <span> Written by: {author.name}</span>
    </>
  );
};

export default Author;
