import Link from "next/link";

interface IAuthor {
  id: number;
  name: string;
}

// ParallelPage Component
const ParallelPage = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!res.ok) throw new Error("Failed to fetch Author");

  const authors: IAuthor[] = await res.json();
  return (
    <div>
      <h1>Welcome to the ParallelPage Component</h1>
      <ul className="list-decimal list-inside mx-8 py-10 grid grid-cols-4 gap-5">
        {authors.map((author) => (
          <li className="space-y-2 border p-4" key={author.id}>
            <p>{author.name}</p>

            <Link
              href={`/fetching/parallel/${author.id}`}
              className="text-blue-400 underline cursor-pointer"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParallelPage;
