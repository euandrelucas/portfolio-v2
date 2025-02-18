export function GET() {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack Jr.",
      company: "Warlocks",
      period: "Julho 2024 - Presente",
      description:
        "Desenvolvo o Ginga, um app para Discord que gerencia bolões de diversos esportes (incluindo eSports). Trabalho nas activities e no bot do Ginga, além de realizar manutenções e participar de eventos da equipe.",
    },
  ];

  return new Response(JSON.stringify(experiences), { status: 200 });
}
