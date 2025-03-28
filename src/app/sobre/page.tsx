"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Code,
  Music,
  Heart,
  Rocket,
  ArrowRight,
  Download,
  BookOpen,
  Lightbulb,
  Target,
  Users,
  ExternalLink,
} from "lucide-react";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "React", level: 75 },
    { name: "Next.js", level: 73 },
    { name: "Node.js", level: 95 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Git", level: 80 },
    { name: "SQL", level: 65 },
    { name: "MongoDB", level: 75 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white pt-20 pb-32">
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
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sobre Mim
            </h1>
            <p className="text-xl opacity-90 mb-8 font-light max-w-2xl mx-auto">
              Conheça mais sobre minha jornada, paixões e o que me motiva como
              desenvolvedor e músico.
            </p>
          </div>
        </div>

        {/* Profile Card - Positioned to overlap sections */}
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden transform translate-y-24">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-md"></div>
                    <Image
                      src="/profile.png"
                      alt="André Paiva"
                      width={160}
                      height={160}
                      className="rounded-full border-4 border-white/30 relative z-10 object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-2">
                  André Paiva
                </h2>
                <p className="text-blue-100 text-center mb-6">
                  Desenvolvedor Full Stack & Músico
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-3 text-blue-200" />
                    <div>
                      <p className="text-sm text-blue-100">Cargo Atual</p>
                      <p className="font-medium">
                        Estagiário de Desenvolvimento
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-3 text-blue-200" />
                    <div>
                      <p className="text-sm text-blue-100">Formação</p>
                      <p className="font-medium">
                        Bacharelado em Ciência e Tecnologia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-5 h-5 mr-3 text-blue-200" />
                    <div>
                      <p className="text-sm text-blue-100">Música</p>
                      <p className="font-medium">
                        Clarinete - Curso Técnico em Música
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <a
                    href="/cv.pdf"
                    className="flex items-center justify-center w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </div>
              </div>

              <div className="md:w-2/3 p-8">
                <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-4 py-3 font-medium rounded-t-lg transition-colors ${
                      activeTab === "profile"
                        ? "text-blue-700 border-b-2 border-blue-700"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    Perfil
                  </button>
                  <button
                    onClick={() => setActiveTab("experience")}
                    className={`px-4 py-3 font-medium rounded-t-lg transition-colors ${
                      activeTab === "experience"
                        ? "text-blue-700 border-b-2 border-blue-700"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    Experiência
                  </button>
                  <button
                    onClick={() => setActiveTab("skills")}
                    className={`px-4 py-3 font-medium rounded-t-lg transition-colors ${
                      activeTab === "skills"
                        ? "text-blue-700 border-b-2 border-blue-700"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    Habilidades
                  </button>
                  <button
                    onClick={() => setActiveTab("music")}
                    className={`px-4 py-3 font-medium rounded-t-lg transition-colors ${
                      activeTab === "music"
                        ? "text-blue-700 border-b-2 border-blue-700"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    Música
                  </button>
                </div>

                {activeTab === "profile" && (
                  <div className="text-slate-700 space-y-4">
                    <p className="leading-relaxed">
                      Olá! Sou André Paiva, um desenvolvedor Full Stack
                      apaixonado por criar soluções inovadoras que transformam
                      ideias em realidade. Minha jornada na programação começou
                      com o desejo de desenvolver jogos, e desde então venho
                      expandindo meus conhecimentos em diversas áreas da
                      tecnologia.
                    </p>
                    <p className="leading-relaxed">
                      Atualmente, sou estagiário de desenvolvimento de software
                      na Warlocks e Diretor de Tecnologia no projeto DreamTeam.
                      Estou cursando Bacharelado em Ciência e Tecnologia, pois
                      acredito que a inovação tem o poder de transformar vidas.
                    </p>
                    <p className="leading-relaxed">
                      Além da tecnologia, tenho uma grande paixão pela música.
                      Estudo Clarinete no Curso Técnico em Música da Escola de
                      Música da UFRN e faço parte da Orquestra Potiguar de
                      Clarinetas, da Banda Sinfônica da EMUFRN e da Banda
                      Municipal de São Gonçalo do Amarante.
                    </p>
                    <p className="leading-relaxed">
                      A música me ensinou disciplina, criatividade e a
                      importância do trabalho em equipe, valores que levo para
                      minha atuação na tecnologia e na inovação.
                    </p>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="text-slate-700 space-y-6">
                    <div className="border-l-2 border-blue-200 pl-4 py-1">
                      <h3 className="text-lg font-bold text-blue-700">
                        Estagiário de Desenvolvimento
                      </h3>
                      <p className="text-slate-600 font-medium">
                        Warlocks • 2022 - Presente
                      </p>
                      <p className="mt-2">
                        Desenvolvimento de aplicações web e mobile utilizando
                        React, Next.js, Node.js e outras tecnologias modernas.
                        Participação em projetos como o Ginga, uma plataforma
                        para acompanhamento de campeonatos de futebol e bolões.
                      </p>
                    </div>

                    <div className="border-l-2 border-blue-200 pl-4 py-1">
                      <h3 className="text-lg font-bold text-blue-700">
                        Diretor de Tecnologia
                      </h3>
                      <p className="text-slate-600 font-medium">
                        DreamTeam • 2021 - Presente
                      </p>
                      <p className="mt-2">
                        Liderança da equipe de desenvolvimento do DreamTeam, um
                        simulador de futebol com cartas colecionáveis de
                        jogadores e clubes brasileiros. Responsável pela
                        arquitetura do sistema e implementação de novas
                        funcionalidades.
                      </p>
                    </div>

                    <div className="border-l-2 border-blue-200 pl-4 py-1">
                      <h3 className="text-lg font-bold text-blue-700">
                        CEO e Fundador
                      </h3>
                      <p className="text-slate-600 font-medium">
                        Noyevel • 2020 - Presente
                      </p>
                      <p className="mt-2">
                        Fundação e gestão da Noyevel, uma startup focada em
                        soluções tecnológicas inovadoras. Desenvolvimento de
                        projetos tanto web quanto soluções backend!
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="text-slate-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-slate-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <h3 className="font-bold text-blue-700 mb-4">
                        Outras Habilidades
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Docker",
                          "Prisma",
                          "Fastify",
                          "Express",
                          "Figma"
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "music" && (
                  <div className="text-slate-700 space-y-4">
                    <p className="leading-relaxed">
                      A música é uma parte fundamental da minha vida. Comecei
                      meus estudos musicais há alguns anos e atualmente estudo
                      Clarinete no Curso Técnico em Música da Escola de Música
                      da UFRN.
                    </p>

                    <h3 className="font-bold text-blue-700 mt-6 mb-3">
                      Grupos Musicais
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                          <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                        </div>
                        <div>
                          <p className="font-medium">
                            Orquestra Potiguar de Clarinetas
                          </p>
                          <p className="text-slate-600 text-sm">Clarinetista</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                          <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                        </div>
                        <div>
                          <p className="font-medium">
                            Banda Sinfônica da EMUFRN
                          </p>
                          <p className="text-slate-600 text-sm">Clarinetista</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                          <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                        </div>
                        <div>
                          <p className="font-medium">
                            Banda Municipal de São Gonçalo do Amarante
                          </p>
                          <p className="text-slate-600 text-sm">Clarinetista</p>
                        </div>
                      </li>
                    </ul>

                    <p className="leading-relaxed mt-6">
                      A prática musical me proporcionou habilidades valiosas que
                      aplico no desenvolvimento de software, como disciplina,
                      atenção aos detalhes, criatividade e capacidade de
                      trabalhar em equipe. Acredito que a combinação de
                      tecnologia e arte oferece uma perspectiva única para
                      resolver problemas e criar soluções inovadoras.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores e Filosofia */}
      <section className="pt-36 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-700 inline-block relative">
                Valores e Filosofia
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-700/20 rounded-full"></span>
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Os princípios que guiam minha jornada pessoal e profissional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Inovação
                </h3>
                <p className="text-slate-700">
                  Acredito no poder da inovação para transformar vidas e
                  resolver problemas complexos. Busco constantemente novas
                  ideias e abordagens criativas.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Aprendizado Contínuo
                </h3>
                <p className="text-slate-700">
                  Valorizo o aprendizado constante e a curiosidade. Acredito que
                  nunca devemos parar de aprender e que cada experiência é uma
                  oportunidade de crescimento.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Paixão</h3>
                <p className="text-slate-700">
                  Coloco paixão em tudo o que faço, seja desenvolvendo software
                  ou tocando clarinete. Acredito que a paixão é o combustível
                  para a excelência.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Propósito
                </h3>
                <p className="text-slate-700">
                  Busco criar soluções com propósito, que realmente façam a
                  diferença na vida das pessoas. Acredito que a tecnologia deve
                  servir a um bem maior.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Colaboração
                </h3>
                <p className="text-slate-700">
                  Valorizo o trabalho em equipe e acredito que as melhores
                  soluções surgem da colaboração. A música me ensinou a
                  importância de ouvir e contribuir em harmonia.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Exploração
                </h3>
                <p className="text-slate-700">
                  Sou movido pela curiosidade e pelo desejo de explorar novos
                  horizontes, seja na tecnologia, na música ou até mesmo no
                  espaço. Acredito que devemos sempre buscar ir além.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interesses e Hobbies */}
      <section className="hidden py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-700 inline-block relative">
                Interesses e Hobbies
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-700/20 rounded-full"></span>
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Além da programação e da música, estas são algumas das coisas
                que me fascinam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Astronomia"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">Astronomia</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700">
                    Sou fascinado pelo universo e seus mistérios. Adoro observar
                    o céu noturno, aprender sobre corpos celestes e acompanhar
                    as últimas descobertas da exploração espacial. Um dos meus
                    maiores sonhos é poder viajar para o espaço um dia.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/projetos/locksnleaps.png"
                    alt="Jogos"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      Desenvolvimento de Jogos
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700">
                    Meu primeiro contato com a programação veio através do
                    desejo de desenvolver jogos. Ainda hoje, gosto de
                    experimentar com game engines e criar pequenos projetos como
                    hobby, explorando a interseção entre tecnologia, arte e
                    narrativa.
                  </p>
                  <a
                    href="https://arkanus.itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Ver mais <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Leitura"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">Leitura</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700">
                    Sou um ávido leitor, especialmente de ficção científica,
                    filosofia e livros técnicos. A leitura me ajuda a expandir
                    horizontes, desenvolver empatia e encontrar inspiração para
                    meus projetos criativos e tecnológicos.
                  </p>
                </div>
              </div> */}

              {/* <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Viagens"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      Viagens e Culturas
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700">
                    Adoro conhecer novos lugares, pessoas e culturas. Acredito
                    que viajar amplia nossa visão de mundo e nos ensina a
                    valorizar a diversidade. Cada viagem é uma oportunidade de
                    aprendizado e inspiração.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Se você está procurando um desenvolvedor apaixonado e criativo
              para seu próximo projeto, ficarei feliz em conversar!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-6 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
              >
                Entre em contato
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/#projects"
                className="px-6 py-3 bg-blue-500/30 backdrop-blur-sm border border-white/30 rounded-full font-medium hover:bg-blue-500/50 transition-all duration-300 flex items-center"
              >
                Ver projetos
                <Code className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Botão de voltar ao topo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 ${
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
