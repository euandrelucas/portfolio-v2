"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    banner?: string;
    bannerAlt?: string;
    category?: string;
    tags?: string[];
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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Image
          src="/icons/loading.svg"
          alt="Loading"
          width={100}
          height={100}
          className="mx-auto items-center justify-center"
        />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
      <main className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar para o blog
            </Link>

            <article className="bg-white rounded-xl shadow-md p-8 mb-12">
              {post.frontmatter.banner && (
                <div className="mb-6">
                  <Image
                    src={post.frontmatter.banner || "/placeholder.svg"}
                    alt={post.frontmatter.bannerAlt || post.frontmatter.title}
                    width={1200}
                    height={400}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
              )}
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
                  {post.frontmatter.title}
                </h1>
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <time dateTime={post.frontmatter.date}>
                    {formatDate(post.frontmatter.date)}
                  </time>
                </div>
              </header>

              <div
                className="prose prose-lg prose-blue max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: post.content.value }}
              />

              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-500 mb-3">
                    TAGS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.frontmatter.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            <section className="giscus" />
          </div>
        </div>
      </main>
    </>
  );
}
