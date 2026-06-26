import { Suspense } from "react";
import Author from "./Author";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// SequentialPage Component
const SequentialPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Sequential Data Fetching Failed");

  const result: IPost[] = await res.json();
  const posts = result.filter((post) => post.id % 10 === 1);

  return (
    <div>
      <h1>Welcome to the SequentialPage Component</h1>

      <ul className="list-decimal list-inside space-y-4 mx-8 py-10">
        {posts?.map((post: IPost) => (
          <li key={post.id} className="space-y-2 border p-4">
            <p>{post.title}</p>
            <p>{post.body}</p>
            <p>
              <Suspense fallback={<span>Author loading...</span>}>
                <Author userId={post.userId}></Author>
              </Suspense>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SequentialPage;
