"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  };
  content: string; // Corrigido: content em vez de contentHtml
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts", error);
      }
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="p-10 grid grid-cols-1 md:grid-cols-1 gap-10 items-center max-w-7xl mx-auto">
      <section className="bg-white shadow-md p-6 rounded-lg w-full">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">Blog</h1>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="bg-white shadow-md p-5 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl font-bold text-blue-600 hover:text-blue-800"
              >
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p className="text-gray-500 text-sm mt-2">
                {post.frontmatter.date}
              </p>
              <p className="text-gray-700 mt-4 line-clamp-4">
                {post.content.substring(0, 250) + "..."}
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
      </section>
    </main>
  );
}
