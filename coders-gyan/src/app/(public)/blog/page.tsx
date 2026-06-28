import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// BlogPage Component
const BlogPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <h1 className="text-4xl font-extrabold text-center mb-12 tracking-tight text-foreground">
        Latest Stories & Insights
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-4 p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-3 text-foreground capitalize line-clamp-2">
                {post.id}. {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                {post.body}
              </p>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline w-fit"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
