"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, use } from "react";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    banner?: string;
    bannerAlt?: string;
  };
  content: {
    value: string;
  };
}

export default function Page({
  params: asyncParams,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(asyncParams);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/posts`);
        const data = await response.json();
        const post = data.find((p: Post) => p.slug === slug);
        if (post) {
          setPost(post);
        } else {
          notFound();
        }
      } catch (error) {
        console.error("Erro ao buscar post", error);
        notFound();
      }
    }

    fetchPost();
  }, [slug]);

  if (!post) {
    return (
      <>
        <Image
          src="/icons/loading.svg"
          alt="Loading"
          width={100}
          height={100}
          className="mx-auto items-center justify-center pt-5"
        />
      </>
    );
  }

  return (
    <>
      <script
        src="https://giscus.app/client.js"
        data-repo="euandrelucas/portfolio-v2"
        data-repo-id="R_kgDON7yj3g"
        data-category="Blog Comments"
        data-category-id="DIC_kwDON7yj3s4CnXj6"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="pt"
        crossOrigin="anonymous"
        async
      ></script>
      <main className="p-10 grid grid-cols-1 md:grid-cols-1 gap-10 items-center max-w-7xl mx-auto">
        <section className="p-6 rounded-lg w-full">
          {post.frontmatter.banner && (
            <div className="mb-6">
              <Image
                src={post.frontmatter.banner}
                alt={post.frontmatter.bannerAlt || post.frontmatter.title}
                width={1200}
                height={400}
                className="rounded-lg w-full object-cover"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            {post.frontmatter.title}
          </h1>
          <p className="text-gray-600 mb-4">{post.frontmatter.date}</p>
          <div
            className="prose lg:prose-xl text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content.value }}
          />
        </section>
        <section className="giscus" />
      </main>
    </>
  );
}
