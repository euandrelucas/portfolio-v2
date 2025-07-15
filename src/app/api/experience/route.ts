export function GET() {
  const experiences = [
    {
      title: "Estagiário em Desenvolvimento de Software",
      company: "Warlocks",
      period: "Julho 2024 - Abril 2025",
      description:
        "Fui responsável pelo desenvolvimento do Ginga, um app para Discord que gerencia bolões de esportes e eSports. Atuei tanto na construção das Discord Activities, quanto no bot do Ginga, além de realizar manutenções e participar de eventos internos na equipe de desenvolvimento."
    },
    {
      title: "Ex-Cofundador e Desenvolvedor",
      company: "DreamTeam",
      period: "Outubro 2022 - Julho 2025",
      description:
        "Ex-cofundador e principal desenvolvedor do DreamTeam, um bot de simulação de futebol para Discord, presente em mais de 65 mil servidores e com 180 mil usuários registrados. Liderava o desenvolvimento técnico utilizando TypeScript, Node.js, PostgreSQL, Redis, Docker e Prisma ORM, garantindo escalabilidade, segurança e performance. Desenvolvi sistemas completos para partidas, pacotes de jogadores, clubes personalizáveis, economia virtual e rankings globais, além de implementar painéis interativos com Discord Components v2, interações avançadas com cache inteligente e renderização dinâmica de imagens e GIFs. Também gerenciava a infraestrutura com Docker e deploy contínuo, além de interagir ativamente com a comunidade para evoluir o produto com base em feedbacks."
    }
  ];

  return new Response(JSON.stringify(experiences), { status: 200 });
}
