"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  Mail,
  Code,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
  }

  interface Project {
    title: string;
    description: string;
    image: string;
    link?: string;
  }

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<
    Record<number, boolean>
  >({});

  const texts = [
    "Desenvolvedor Full Stack",
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
  ];

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const response = await fetch("/api/experience");
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Erro ao buscar experiências do LinkedIn", error);
      }
    }

    const sampleProjects: Project[] = [
      {
        title: "Ginga",
        description:
          "Transforme o seu no Discord servidor em uma central de futebol para acompanhar seus campeonatos favoritos e disputar bolões com seus amigos! Projeto da Warlocks",
        image: "/projetos/ginga.webp",
        link: "https://ginga.gg/",
      },
      {
        title: "DreamTeam",
        description:
          "O DreamTeam é um simulador de futebol feito por brasileiros apaixonados por futebol. Com cartas únicas e originais de jogadores e clubes brasileiros, são mais de 1300 cartas colecionáveis (incluindo Pelé, Arrascaeta, Hulk, Ronaldinho e muito mais!) para que você possa fazer o seu time dos sonhos. Então venha em busca de fazer o melhor time do mundo!",
        image: "/projetos/dreamteam.png",
        link: "https://dreamteam.futbol",
      },
      {
        title: "Gol Website Remake",
        description:
          "Remake do site do Gol Linhas Aereas, desenvolvido como projeto pessoal para praticar habilidades de front-end e design responsivo.",
        image: "/projetos/gol.jpeg",
        link: "https://github.com/euandrelucas/gol-website-clone",
      },
      /*{
        title: "Website da Noyevel",
        description:
          "Desenvolvi o site institucional da Noyevel, a startup da qual sou CEO e fundador, com o objetivo de apresentar a empresa, nossa visão e os projetos que estamos construindo. O site foi feito com foco em performance, responsividade e uma identidade visual marcante, refletindo o espírito criativo e inovador da Noyevel.",
        image: "/projetos/noyevel.jpeg",
        link: "https://noyevel.com",
      },*/
      {
        title: "Website da Rio Bot",
        description:
          "Desenvolvi o site da Rio Bot, um projeto da Noyevel que oferece soluções inteligentes para servidores no Discord. O site foi criado com o objetivo de apresentar o bot ao público de forma clara e atrativa, reunindo informações sobre comandos, planos premium, tutoriais de uso e páginas institucionais como termos de uso e política de privacidade.",
        image: "/projetos/rio.jpeg",
        link: "https://rio.squareweb.app/",
      },
      {
        title: "Sonic Velocity (UFRN Edition)",
        description:
          "Desenvolvi um jogo do Sonic utilizando p5.js como parte de um projeto acadêmico para a disciplina de Lógica de Programação na UFRN. O jogo apresenta animações dinâmicas, coleta de anéis e um sistema de pontuação que torna a experiência mais envolvente. O objetivo foi aplicar conceitos de programação e lógica de forma prática, criando um protótipo funcional e interativo.",
        image: "/projetos/sonic.png",
        link: "https://sonic.andrepaiva.dev/",
      },
      {
        title: "Discord Experiments",
        description:
          "Desenvolvi uma aplicação que lista os experiments dos servidores do Discord, exibindo seus rollouts, tratamentos e overrides atuais. O objetivo é oferecer uma visão clara e organizada das funcionalidades em teste na plataforma, facilitando o acompanhamento das implementações e variações em diferentes servidores.",
        image: "/projetos/discord.png",
        link: "https://rollouts.andrepaiva.dev/",
      },
    ];

    setProjects(sampleProjects);
    fetchExperiences();
  }, []);

  // Efeito para a animação de digitação
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    } else {
      const currentText = texts[currentTextIndex];
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, currentTextIndex]);

  const toggleExpand = (index: number) => {
    setExpandedProjects({
      ...expandedProjects,
      [index]: !expandedProjects[index],
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero Section - Versão Melhorada */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">
        {/* Background com efeito de partículas */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
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

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                Desenvolvedor Full Stack
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Olá, me chamo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  André Paiva
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 font-light">
                Sou um{" "}
                <span className="font-medium relative">
                  <span className="inline-block min-h-[1.5em] after:content-['|'] after:ml-1 after:animate-blink">
                    {displayText}
                  </span>
                </span>
              </p>
              <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto md:mx-0 font-light">
                Apaixonado por criar soluções eficientes e inovadoras que
                transformam ideias em realidade.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                >
                  Entre em contato
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/#projects"
                  className="px-6 py-3 bg-blue-600/30 backdrop-blur-sm border border-white/30 rounded-full font-medium hover:bg-blue-600/50 transition-all duration-300 flex items-center"
                >
                  Ver projetos
                  <Code className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="flex gap-4 mt-10 justify-center md:justify-start">
                <a
                  href="https://github.com/euandrelucas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/andretpaiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:contato@andrepaiva.dev"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="md:w-2/5 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 blur-xl animate-pulse"></div>
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-50 blur-sm"></div>
                <Image
                  src="/profile.png"
                  alt="André Paiva"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-white/30 shadow-2xl relative z-10 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Experiência Profissional */}
        <section id="experience" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 inline-block relative">
              Experiência Profissional
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-700/20 rounded-full"></span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Linha do tempo vertical */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:translate-x-px"></div>

            {experiences.length > 0 ? (
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Círculo na linha do tempo */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-blue-100 transform -translate-x-2 md:-translate-x-2.5 shadow-md"></div>

                    {/* Conteúdo */}
                    <div
                      className={`flex-1 md:w-1/2 ${
                        index % 2 === 0
                          ? "md:pr-12 pl-8 md:pl-0"
                          : "md:pl-12 pl-8"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-slate-100 transform hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-blue-700">
                          {exp?.title}
                        </h3>
                        <p className="text-slate-600 font-medium mb-3">
                          {exp?.company} •{" "}
                          <span className="text-slate-500">{exp?.period}</span>
                        </p>
                        <p className="text-slate-700">{exp?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-700"></div>
              </div>
            )}
          </div>
        </section>

        {/* Projetos */}
        <section id="projects" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 inline-block relative">
              Projetos
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-700/20 rounded-full"></span>
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvi e participei ao longo
              da minha carreira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllProjects ? projects : projects.slice(0, 6)).map(
              (project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-slate-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">
                      {project.title}
                    </h3>
                    <div className="flex-grow">
                      <p className="text-slate-700">
                        {expandedProjects[index] ||
                        project.description.length <= 100
                          ? project.description
                          : `${project.description.substring(0, 100)}...`}
                      </p>
                      {project.description.length > 100 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-blue-600 mt-2 flex items-center text-sm font-medium hover:text-blue-800"
                        >
                          {expandedProjects[index] ? (
                            <>
                              Mostrar menos{" "}
                              <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Ler mais <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                      >
                        Ver projeto <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {projects.length > 6 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md flex items-center mx-auto"
              >
                {showAllProjects ? (
                  <>
                    Mostrar menos <ChevronUp className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Ver mais projetos <ChevronDown className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </section>

        {/* Sobre Mim */}
        <section id="about" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 inline-block relative">
              Sobre Mim
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-700/20 rounded-full"></span>
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-slate-700 leading-relaxed">
                  Olá, me chamo André! Sou Desenvolvedor Full Stack com experiência em construir aplicações modernas e escaláveis para plataformas como Discord e web. Atualmente, trabalho na Warlocks desenvolvendo o Ginga, um app para gerenciar bolões esportivos, tanto em formato de bot quanto via Discord Activities.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Também sou fundador e CEO da Noyevel, uma startup dedicada à criação de bots e soluções digitais inovadoras para Discord, incluindo projetos como o Rio Bot. Fui cofundador e desenvolvedor principal do DreamTeam, um bot de simulação de futebol para Discord, presente em mais de 65 mil servidores e com 180 mil usuários registrados.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Estou sempre em busca de desenvolver soluções que impactem positivamente a vida das pessoas e tornar a tecnologia mais acessível. Além do universo tech, sou músico e estudo Clarinete no Curso Técnico em Música da Escola de Música da UFRN, integrando grupos como a Orquestra Potiguar de Clarinetas e a Banda Municipal de São Gonçalo do Amarante. A música me ensina disciplina, sensibilidade e trabalho em equipe — valores que levo para cada projeto que abraço.
                </p>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-blue-50 rounded-xl p-6 h-full">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Meus Objetivos
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-slate-700">
                        Abrir meu próprio negócio e construir algo que realmente
                        faça a diferença no mundo.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-slate-700">
                        Criar soluções inovadoras que impactem positivamente a
                        vida das pessoas.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                        <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                      </div>
                      <p className="text-slate-700">
                        Explorar o espaço - um dos meus maiores sonhos é poder
                        viajar para além do nosso planeta um dia.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contact" className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 inline-block relative">
              Contato
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-700/20 rounded-full"></span>
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Interessado em trabalhar juntos? Entre em contato comigo através
              de um dos canais abaixo.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="mailto:contato@andrepaiva.dev"
                className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="h-10 w-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-center text-blue-100">
                  contato@andrepaiva.dev
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/andretpaiva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-10 w-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p className="text-center text-blue-100">Conecte-se comigo</p>
              </a>

              <a
                href="https://github.com/euandrelucas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="h-10 w-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-center text-blue-100">Veja meus projetos</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
