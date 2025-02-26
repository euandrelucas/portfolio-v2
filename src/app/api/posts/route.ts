import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIRECTORY = path.join(process.cwd(), "src/app/posts");

export async function GET() {
  try {
    // Verifica se o diretório de posts existe
    try {
      await fs.access(POSTS_DIRECTORY);
    } catch {
      return NextResponse.json(
        { error: "Posts directory not found" },
        { status: 404 }
      );
    }

    // Obtém todos os arquivos Markdown
    const filenames = (await fs.readdir(POSTS_DIRECTORY)).filter((file) =>
      file.endsWith(".md")
    );

    // Processa cada arquivo individualmente
    const posts = (
      await Promise.all(
        filenames.map(async (filename) => {
          try {
            const slug = filename.replace(/\.md$/, "");
            const filePath = path.join(POSTS_DIRECTORY, filename);
            const fileContents = await fs.readFile(filePath, "utf8");

            // Extrai metadados e conteúdo
            const { data: frontmatter, content } = matter(fileContents);

            // Converte Markdown para HTML
            const renderedContent = await remark().use(html).process(content);

            return {
              slug,
              frontmatter: {
                title: frontmatter.title || "Sem título",
                description: frontmatter.description || "Sem descrição",
                date: frontmatter.date || "0000-00-00",
              },
              content: renderedContent, // Agora retorna HTML compilado
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
      ); // Ordena pela data (mais recente primeiro)

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
