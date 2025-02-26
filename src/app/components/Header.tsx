"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/profile.png"
              alt="André Paiva"
              className="rounded-full w-10 h-10 border-2 border-white shadow-sm"
              width={40}
              height={40}
            />
            <span className="text-xl font-semibold">André Paiva</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Início
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Blog
            </Link>
            <Link
              href="/#projects"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Projetos
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Contato
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu dropdown para telas pequenas */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 py-4">
          <nav className="flex flex-col space-y-3 px-4">
            <Link
              href="/"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Início
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Blog
            </Link>
            <Link
              href="/#projects"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Projetos
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
