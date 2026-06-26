"use client";

import Link from "next/link";
import { articles } from "../page";
import { notFound, redirect, useRouter } from "next/navigation";
import { use } from "react";

interface IProps {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "bn" | "cn" }>;
}

// Languages
const languages = [
  {
    href: "en",
    label: "English",
  },
  {
    href: "bn",
    label: "Bengali",
  },
  {
    href: "cn",
    label: "Chinese",
  },
];

// DynamicAriclePage Component
const DynamicAriclePage = ({ params, searchParams }: IProps) => {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  const router = useRouter();

  const article = articles.find(
    (article) => article.id.toString() === articleId,
  );

  if (!article) {
    notFound();
  }

  const filteredLang = languages.find((language) => language.href === lang);

  // marked function
  const handleMark = () => {
    console.log("Article Marked");
    redirect("/")
  };

  return (
    <div className="container mx-auto mt-10 p-5 bg-neutral-800 rounded-lg">
      <p className="text-sm text-neutral-500 pb-2">Article ID: {articleId}</p>
      <h1 className="text-3xl font-bold mb-4">{article?.title}</h1>
      <p className="text-gray-300 text-lg">{article?.description}</p>
      <p className="text-gray-300 text-lg my-4">
        Reading Language: {filteredLang?.label}
      </p>

      <div className="space-x-4">
        <button
          onClick={handleMark}
          className="p-2 bg-neutral-950 cursor-pointer rounded"
        >
          Mark as Read
        </button>
        <button
          onClick={() => router.back()}
          className="p-2 bg-neutral-950 cursor-pointer rounded"
        >
          Back To Aricles
        </button>
      </div>

      <div className="mt-10 pt-5 border-t flex gap-5 border-neutral-700">
        {languages.map((language, index) => (
          <Link
            key={index}
            href={`/articles/${articleId}?lang=${language.href}`}
          >
            {language.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DynamicAriclePage;
