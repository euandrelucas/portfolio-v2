"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        console.log(data)
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="p-10 max-w-7xl mx-auto">
      <section className="p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">Blog</h1>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 animate-pulse rounded-lg p-5 h-40"
                />
              ))}
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="bg-white shadow-md p-5 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xl font-bold text-blue-600 hover:text-blue-800"
                  aria-label={`Leia mais sobre ${post.frontmatter.title}`}
                >
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <p className="text-gray-500 text-sm mt-2">
                  {new Date(post.frontmatter.date).toLocaleDateString("pt-BR")}
                </p>
                <p className="text-gray-700 mt-4 line-clamp-4">
                  {post.frontmatter.description.substring(0, 250) + "..."}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-500 hover:underline mt-3 inline-block"
                >
                  Ler mais
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
