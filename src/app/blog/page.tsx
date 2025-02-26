"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Search, Calendar, Tag, ArrowRight } from "lucide-react";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    category?: string;
    tags?: string[];
  };
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);

        const uniqueCategories = Array.from(
          new Set(
            data.map((post: Post) => post.frontmatter.category).filter(Boolean)
          )
        );
        setCategories(uniqueCategories as string[]);

        setFilteredPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filterPosts = useCallback(() => {
    let result = [...posts];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().includes(query) ||
          post.frontmatter.description.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      result = result.filter(
        (post) => post.frontmatter.category === selectedCategory
      );
    }

    setFilteredPosts(result);
  }, [posts, searchQuery, selectedCategory]);

  useEffect(() => {
    filterPosts();
  }, [filterPosts]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Compartilhando conhecimento, experiências e reflexões sobre
              desenvolvimento, tecnologia e inovação.
            </p>

            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/70" />
              </div>
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-10 pr-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        {categories.length > 0 && (
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md animate-pulse"
                >
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/4 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded"></div>
                    <div className="h-4 bg-slate-200 rounded"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="p-6 flex flex-col flex-grow">
                  {post.frontmatter.category && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.frontmatter.category}
                    </span>
                  )}

                  <Link href={`/blog/${post.slug}`} className="group">
                    <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.frontmatter.title}
                    </h2>
                  </Link>

                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <time dateTime={post.frontmatter.date}>
                      {formatDate(post.frontmatter.date)}
                    </time>
                  </div>

                  <p className="text-slate-600 mb-4 line-clamp-3 flex-grow">
                    {post.frontmatter.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto"
                  >
                    Ler artigo completo
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-md p-10 max-w-lg mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Nenhum resultado encontrado
              </h2>
              <p className="text-slate-600 mb-6">
                Não encontramos nenhum artigo que corresponda à sua busca. Tente
                outros termos ou remova os filtros.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-md p-10 max-w-lg mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Ainda não há artigos publicados
              </h2>
              <p className="text-slate-600">
                Estamos trabalhando em novos conteúdos. Volte em breve para
                conferir nossos artigos!
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
