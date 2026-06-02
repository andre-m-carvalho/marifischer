import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  dataISO: string;
}

export interface Post extends PostMeta {
  conteudo: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        titulo: data.titulo ?? "",
        resumo: data.resumo ?? "",
        data: data.data ?? "",
        dataISO: data.dataISO ?? "",
      };
    })
    .sort((a, b) => (a.dataISO < b.dataISO ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const filepath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    titulo: data.titulo ?? "",
    resumo: data.resumo ?? "",
    data: data.data ?? "",
    dataISO: data.dataISO ?? "",
    conteudo: content,
  };
}
