import { NextResponse } from "next/server";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POST_FILENAMES = [
  // "colocando-um-ip-adicional-a-uma-vm-lxd.md",
  "como-ter-um-bot-grande.md",
  "experiencia-com-ubuntu.md",
  "notebook-padrao-ou-chromebook.md",
  "pacote-nao-encontrado.md"
];

export async function GET() {
  try {
    const posts = (
      await Promise.all(
        POST_FILENAMES.map(async (filename) => {
          try {
            const slug = filename.replace(/\.md$/, "");

            // Substitua pela sua URL real de produção ou local
            const fileUrl = `https://andrepaiva.dev/posts/${filename}`; // ou http://localhost:8787/posts/${filename}
            const res = await fetch(fileUrl);

            if (!res.ok) {
              console.error(`Falha ao carregar ${filename}`);
              return null;
            }

            const fileContents = await res.text();
            const { data: frontmatter, content } = matter(fileContents);
            const renderedContent = await remark().use(html).process(content);

            return {
              slug,
              frontmatter: {
                title: frontmatter.title || "Sem título",
                description: frontmatter.description || "Sem descrição",
                date: frontmatter.date || "0000-00-00",
              },
              content: renderedContent.toString(),
            };
          } catch (error) {
            console.error(`Erro ao processar ${filename}:`, error);
            return null;
          }
        })
      )
    )
      .filter((post) => post !== null)
      .sort(
        (a, b) =>
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
      );

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
