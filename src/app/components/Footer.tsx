"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUp,
  Code,
  Music,
  Briefcase,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white pt-16 pb-8 overflow-hidden">
      {/* Partículas decorativas */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1: Sobre */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">André Paiva</h3>
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras
              e eficientes que transformam ideias em realidade.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/euandrelucas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/andretpaiva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@andrepaiva.dev"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-blue-100 hover:text-white transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Experiência */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              Experiência
            </h3>
            <ul className="space-y-3">
              <li className="text-blue-100">
                <p className="font-medium">Warlocks</p>
                <p className="text-sm opacity-80">
                  Estagiário de Desenvolvimento
                </p>
              </li>
              <li className="text-blue-100">
                <p className="font-medium">DreamTeam</p>
                <p className="text-sm opacity-80">Diretor de Tecnologia</p>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Música */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Music className="w-4 h-4 mr-2" />
              Música
            </h3>
            <ul className="space-y-2">
              <li className="text-blue-100 leading-relaxed">
                Clarinete - Curso Técnico em Música (EMUFRN)
              </li>
              <li className="text-blue-100 leading-relaxed">
                Orquestra Potiguar de Clarinetas
              </li>
              <li className="text-blue-100 leading-relaxed">
                Banda Sinfônica da EMUFRN
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-100 mb-4 md:mb-0">
            © {currentYear} André Paiva. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm flex items-center transition-colors"
            aria-label="Voltar ao topo"
          >
            Voltar ao topo
            <ArrowUp className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
