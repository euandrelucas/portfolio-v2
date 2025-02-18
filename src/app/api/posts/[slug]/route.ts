import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it"; // Importação correta

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), "src/app/posts");

    try {
      await fs.access(postsDirectory); // Verifica se o diretório existe
    } catch {
      return NextResponse.json(
        { error: "Posts directory not found" },
        { status: 404 }
      );
    }

    const filenames = (await fs.readdir(postsDirectory)).filter((file) =>
      file.endsWith(".md")
    );

    const md = new MarkdownIt(); // Instância segura do MarkdownIt

    const posts = await Promise.all(
      filenames.map(async (filename) => {
        try {
          const slug = filename.replace(/\.md$/, "");
          const fullPath = path.join(postsDirectory, filename);
          const fileContents = await fs.readFile(fullPath, "utf8");
          const { data: frontmatter, content } = matter(fileContents);

          const renderedContent = md.render(content); // Renderização segura do Markdown

          return {
            slug,
            frontmatter,
            content: renderedContent, // Retorna HTML seguro
          };
        } catch (error) {
          console.error(`Error reading file ${filename}:`, error);
          return null;
        }
      })
    );

    return NextResponse.json(posts.filter((post) => post !== null));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
