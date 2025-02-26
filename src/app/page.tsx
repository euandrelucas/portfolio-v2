/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useCallback, useEffect, useState } from "react";
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
  const [newText] = useState("Desenvolvedor Full Stack");

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

  {
    /* Quero que faça uma animação que fique apagando e escrevendo "Desenvolvedor Full Stack", "Desenvolvedor Frontend" e "Desenvolvedor Backend" */
  }

  // Pegue o animatedText span
  const texts = [
    "Desenvolvedor Full Stack",
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
  ];

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * texts.length);
    const text = document.getElementById("animatedText");
    if (text) {
      const currentText = text.innerText;
      let i = 0;
      const intervalID = setInterval(() => {
        if (i < currentText.length) {
          text.innerText = currentText.slice(0, currentText.length - i);
          i++;
        } else {
          text.innerText = texts[index].slice(0, i - currentText.length);
          i++;
        }
        if (i > currentText.length + texts[index].length) {
          clearInterval(intervalID);
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 10000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

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
            Olá, me chamo André Paiva!
          </h1>
          <p className="mt-4 text-lg max-w-lg">
            Sou um desenvolvedor full stack com experiência em diversas
            tecnologias. Apaixonado por criar soluções eficientes e inovadoras.
          </p>
          <p className="mt-4 text-lg max-w-lg">
            Eu sou o <span id="animatedText">{newText}</span> que você precisa!
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {(showAllProjects ? projects : projects.slice(0, 6)).map(
              (project, index) => (
                <div
                  key={index}
                  className="bg-white flex flex-col rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg min-w-[400px]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-t-lg object-cover w-full"
                  />
                  <div className="p-4 flex flex-col justify-between h-full">
                    {" "}
                    <h3 className="text-xl font-semibold text-center">
                      {project.title}
                    </h3>
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

        <section className="p-5 rounded-lg col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Sobre Mim</h2>
          <p className="text-gray-700">
            Olá, me chamo André! Sou estagiário de desenvolvimento de software
            na Warlocks e Diretor de Tecnologia no projeto DreamTeam. Desde que
            comecei minha jornada no desenvolvimento, sempre fui movido pela
            curiosidade e pela vontade de criar soluções inovadoras. Meu
            primeiro contato com a programação veio através do desejo de
            desenvolver jogos, e hoje, sigo expandindo meus conhecimentos em
            diversas áreas da tecnologia.
          </p>
          <p className="text-gray-700 pt-5">
            Atualmente, estou cursando Bacharelado em Ciência e Tecnologia, pois
            acredito que a inovação tem o poder de transformar vidas. Meu maior
            objetivo é desenvolver soluções que realmente façam a diferença no
            mundo, impactando positivamente a vida das pessoas e tornando a
            tecnologia mais acessível e eficiente.
          </p>
          <p className="text-gray-700 pt-5">
            Além da tecnologia, sou músico e estudo Clarinete no Curso Técnico
            em Música da Escola de Música da UFRN. Faço parte da Orquestra
            Potiguar de Clarinetas, da Banda Sinfônica da EMUFRN e da Banda
            Municipal de São Gonçalo do Amarante. A música me ensinou
            disciplina, criatividade e a importância do trabalho em equipe,
            valores que levo para minha atuação na tecnologia e na inovação.
          </p>
          <p className="text-gray-700 pt-5">
            Tenho o grande sonho de abrir meu próprio negócio e construir algo
            que realmente faça a diferença no mundo. A ideia de empreender e
            criar soluções inovadoras me motiva diariamente a buscar novos
            conhecimentos e desafios. Além disso, sempre tive uma grande
            fascinação pelo espaço, e um dos meus maiores sonhos é poder viajar
            para além do nosso planeta um dia.
          </p>
        </section>

        {/* Seção de contato */}
        <section className="p-5 rounded-lg col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Contato</h2>
          <p className="text-gray-700">
            Se você gostou do meu trabalho e quer entrar em contato comigo, pode
            me chamar nas redes sociais ou enviar um e-mail para
            <a
              href="mailto:contato@andrepaiva.dev
              "
              className="text-blue-500"
            >
              {" "}
              contato@andrepaiva.dev
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
