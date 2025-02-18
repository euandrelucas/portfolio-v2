"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
      // ... outros projetos
    ];

    setProjects(sampleProjects);
    fetchExperiences();
  }, []);

  const [expandedProjects, setExpandedProjects] = useState<
    Record<number, boolean>
  >({});

  const toggleExpand = (index: number) => {
    setExpandedProjects({
      ...expandedProjects,
      [index]: !expandedProjects[index],
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <main className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/profile.png"
            alt="Minha Foto"
            className="rounded-full w-40 h-40 border-4 border-blue-300 shadow-md"
            width={4096}
            height={4096}
          />
          <h1 className="text-5xl font-bold mt-4">
            Bem-vindo ao meu portfólio!
          </h1>
          <p className="mt-4 text-lg max-w-lg">
            Sou um desenvolvedor full stack com experiência em diversas
            tecnologias. Apaixonado por criar soluções eficientes e inovadoras.
          </p>
        </div>
        <section className="bg-white shadow-md p-5 rounded-lg">
          <h2 className="text-3xl font-bold text-blue-500">
            Experiência Profissional
          </h2>
          <div id="experience" className="mt-5 text-left">
            {experiences.length > 0 ? (
              experiences.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{exp?.title}</h3>
                  <p className="text-gray-600">
                    {exp?.company} - {exp?.period}
                  </p>
                  <p className="text-gray-700">{exp?.description}</p>
                </div>
              ))
            ) : (
              <Image
                src="/icons/loading.svg"
                alt="Loading"
                width={100}
                height={100}
                className="mx-auto items-center"
              />
            )}
          </div>
        </section>

        <section className="p-5 w-full">
          <h2 className="text-3xl font-bold text-blue-500 mb-8" id="projects">
            Projetos
          </h2>
          <div className="flex flex-col gap-10 md:gap-20 flex-wrap md:flex-row">
            {(showAllProjects ? projects : projects.slice(0, 6)).map(
              (project, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-t-lg object-cover w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-center">
                      {project.title}
                    </h3>
                    {/* Se o texto for muito grande, expanda o quadrado */}
                    <p className="text-gray-700 line-clamp-3 text-center flex">
                      {expandedProjects[index]
                        ? project.description
                        : project.description.length > 100
                        ? `${project.description.substring(0, 100)}...`
                        : project.description}
                      {project.description.length > 100 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-blue-500 mt-2 inline-block"
                        >
                          {expandedProjects[index]
                            ? " Mostrar Menos"
                            : " Ler Mais"}
                        </button>
                      )}
                    </p>

                    {project.link && (
                      <div className="flex justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 mt-2 inline-block"
                        >
                          Ver Projeto
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
          {projects.length > 6 && (
            <div className="mt-5 text-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="bg-blue-500 text-white py-2 px-4 rounded-full"
              >
                {showAllProjects ? "Ver Menos" : "Ver Mais"}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
