"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 text-blue-700 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-full ${
                  scrolled ? "bg-blue-400/20" : "bg-blue-400/30"
                } blur-sm group-hover:blur-md transition-all duration-300`}
              ></div>
              <Image
                src="/profile.png"
                alt="André Paiva"
                className={`rounded-full w-10 h-10 relative z-10 ${
                  scrolled
                    ? "border-2 border-blue-500/30"
                    : "border-2 border-white/50"
                } transition-all duration-300 group-hover:scale-105`}
                width={40}
                height={40}
              />
            </div>
            <span
              className={`text-xl font-semibold transition-all duration-300 ${
                scrolled ? "text-blue-700" : "text-white"
              }`}
            >
              André Paiva
            </span>
          </Link>

          <nav className="hidden md:flex space-x-1">
            {["Início", "Blog", "Projetos", "Contato"].map((item, index) => (
              <Link
                key={item}
                href={
                  index === 0
                    ? "/"
                    : index === 1
                    ? "/blog"
                    : `/#${item.toLowerCase()}`
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled
                  ? "text-blue-700 hover:bg-blue-50"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu dropdown para telas pequenas */}
      {isMenuOpen && (
        <div
          className={`md:hidden py-4 px-4 mt-2 mx-4 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300 ${
            scrolled
              ? "bg-white/95 text-slate-800"
              : "bg-blue-800/95 text-white"
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {["Início", "Blog", "Projetos", "Contato"].map((item, index) => (
              <Link
                key={item}
                href={
                  index === 0
                    ? "/"
                    : index === 1
                    ? "/blog"
                    : `/#${item.toLowerCase()}`
                }
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "hover:bg-blue-50 hover:text-blue-700"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
