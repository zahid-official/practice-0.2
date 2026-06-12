import Link from "next/link";

export const articles = [
  {
    id: 1,
    title: "Introduction to Next.js 15",
    description: "Learn the basics of the latest Next.js version.",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    description: "How to build beautiful UIs with utility classes.",
  },
  {
    id: 3,
    title: "Understanding React Server Components",
    description: "A deep dive into the server-first architecture.",
  },
  {
    id: 4,
    title: "Optimizing Core Web Vitals",
    description: "Improve your site performance and SEO.",
  },
  {
    id: 5,
    title: "TypeScript Design Patterns",
    description: "Advanced techniques for scalable applications.",
  },
];

// ArticlePage Component
const ArticlePage = () => {
  return (
    <div className="grid grid-cols-3 gap-5 container mx-auto mt-10">
      {articles.map((article) => (
        <div
          className="bg-neutral-700 p-5 rounded-md space-y-5"
          key={article.id}
        >
          <h2>{article.title}</h2>
          <Link
            className="p-2 bg-neutral-900 rounded"
            href={`/articles/${article.id}?lang=en`}
          >
            View Article
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticlePage;
