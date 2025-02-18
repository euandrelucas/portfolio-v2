import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownit from "markdown-it";

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "src/app/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);

    const md = markdownit();
    const result = md.render(content);

    return {
      slug,
      frontmatter,
      content: result, // Retorne o conteúdo Markdown aqui
    };
  });

  return NextResponse.json(posts);
}
