"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Tag,
  ArrowRight,
  BookOpen,
  Filter,
  X,
} from "lucide-react";

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
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white py-20 md:py-28">
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Artigos e Tutoriais
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl opacity-90 mb-8 font-light">
              Compartilhando conhecimento, experiências e reflexões sobre
              desenvolvimento, tecnologia e inovação.
            </p>

            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/70" />
              </div>
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/70 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        {/* Filtros de categoria */}
        {categories.length > 0 && (
          <div className="mb-10">
            <div className="md:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-between px-4 py-3 bg-blue-50 rounded-lg text-blue-700 font-medium"
              >
                <span className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  {selectedCategory
                    ? `Categoria: ${selectedCategory}`
                    : "Filtrar por categoria"}
                </span>
                {showFilters ? (
                  <X className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>

              {showFilters && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-lg border border-slate-100">
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                        selectedCategory === null
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-slate-700 hover:bg-blue-100"
                      }`}
                    >
                      Todos
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowFilters(false);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                          selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-slate-700 hover:bg-blue-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden md:flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === null
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-blue-50 text-slate-700 hover:bg-blue-100"
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-blue-50 text-slate-700 hover:bg-blue-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Estado de carregamento */}
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
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full border border-slate-100"
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
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto group"
                  >
                    Ler artigo completo
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-md p-10 max-w-lg mx-auto border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-blue-500" />
              </div>
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
                className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Limpar filtros
              </button>
            </div>
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-md p-10 max-w-lg mx-auto border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
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
