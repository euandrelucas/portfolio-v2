"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Head>
        <title>André Paiva</title>
        <meta name="description" content="Portfólio de Desenvolvedor" />
      </Head>
      <header className="bg-blue-500 text-white p-5 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href={`/`} className="flex items-center space-x-4">
              <Image
                src="/profile.png"
                alt="Minha Foto"
                className="rounded-full w-12 h-12 border-4 border-blue-300 shadow-md"
                width={4096}
                height={4096}
              />
              <span className="text-2xl">André Paiva</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6 text-lg">
            <Link href="/">Início</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#projects">Projetos</Link>
            <Link href="/contato">Contato</Link>
          </nav>

          <div className="hidden md:flex">
            <button
              disabled={true}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300"
            >
              Login
            </button>
          </div>

          {/* Menu hamburguer para telas pequenas */}
          <div className="md:hidden">
            <button className="text-white" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu dropdown para telas pequenas */}
        <div className="md:hidden mt-4 space-y-4">
          <nav className="space-y-2">
            <Link href="/" className="block">
              Início
            </Link>
            <Link href="/sobre" className="block">
              Sobre
            </Link>
            <Link href="/#projects" className="block">
              Projetos
            </Link>
            <Link href="/contato" className="block">
              Contato
            </Link>
            <button
              disabled={true}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300"
            >
              Login
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
