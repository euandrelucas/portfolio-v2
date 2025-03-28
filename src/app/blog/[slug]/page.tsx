"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import {
  Calendar,
  ArrowLeft,
  Tag,
  BookOpen,
  MessageSquare,
  Share2,
  Bookmark,
  Copy,
  Check,
} from "lucide-react";
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
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-600 font-medium">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Artigo não encontrado
          </h2>
          <p className="text-slate-600 mb-6">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Link
            href="/blog"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white py-16 md:py-20">
        {/* Background com efeito de partículas */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `float ${
                    Math.random() * 10 + 10
                  }s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              ></div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o blog
            </Link>

            {post.frontmatter.category && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {post.frontmatter.category}
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.frontmatter.title}
            </h1>

            <div className="flex items-center text-white/80 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              <time dateTime={post.frontmatter.date}>
                {formatDate(post.frontmatter.date)}
              </time>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-6">
            <div className="flex space-x-2">
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors relative group"
                aria-label="Compartilhar link"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-slate-600" />
                )}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {copied ? "Copiado!" : "Copiar link"}
                </span>
              </button>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}&text=${encodeURIComponent(post.frontmatter.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors relative group"
                aria-label="Compartilhar no Twitter"
              >
                <Share2 className="w-5 h-5 text-slate-600" />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Compartilhar
                </span>
              </a>
              <button
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors relative group"
                aria-label="Salvar artigo"
              >
                <Bookmark className="w-5 h-5 text-slate-600" />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Salvar
                </span>
              </button>
            </div>
          </div>

          <article className="bg-white rounded-xl shadow-md p-8 mb-12">
            {post.frontmatter.banner && (
              <div className="mb-8 -mt-4 -mx-4 sm:-mx-6">
                <Image
                  src={post.frontmatter.banner || "/placeholder.svg"}
                  alt={post.frontmatter.bannerAlt || post.frontmatter.title}
                  width={1200}
                  height={400}
                  className="w-full object-cover rounded-t-lg"
                />
              </div>
            )}

            <div
              dangerouslySetInnerHTML={{ __html: post.content.value }}
              className="prose prose-lg prose-blue max-w-none text-slate-700 prose-headings:text-blue-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
            >
              {/* <ReactMarkdown >{post.content.value}</ReactMarkdown> */}
            </div>

            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-500 mb-4 flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  TAGS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h3 className="text-xl font-bold text-blue-700 mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Comentários
            </h3>
            <div className="giscus" />
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
              data-input-position="top"
              data-theme="light"
              data-lang="pt"
              crossOrigin="anonymous"
              async
            ></script>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para todos os artigos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
